import { Flex, Stack } from '@chakra-ui/react'
import { useEffect, useState } from 'react';
import ContentCard from '../../components/contentCard';
import InfiniteScroll from '../../components/infiniteScroll';
import SearchBox from '../../components/serachBox';
import client from '../../services/graphQl';
import { GET_CONTENT } from '../../services/graphQl/queries';
import contentParser from '../../utils/contentParser';
import { initFilter } from '../../utils/contsnts';
import debounce from '../../utils/debounce';
const ContentView = (props) => {
  const [contents, _setContents] = useState([]);
  const [parsedContents, _setParsedContents] = useState([]);
  const [filters, _setFilters] = useState({ ...initFilter });
  const [queryMeta, _setQueryMeta] = useState({});
  const [hasMore, _setHasMore] = useState(true);
  const [loadMore, _setLoadMore] = useState(false);
  const [isLoading, _setIsLoading] = useState(false);;

  //Function to do GraphQl query with current filters, sorting, tags etc
  const fetchContents = () => {
    _setIsLoading(true);
    let oldFilters = { ...filters };
    oldFilters.offset = queryMeta.hasOwnProperty('offset') ? queryMeta.offset + queryMeta.limit : 0;
    client
      .query({
        query: GET_CONTENT,
        variables: {
          filter: oldFilters,
          language: null
        },
        fetchPolicy: "network-only",
      })
      .then((res) => {
        if (res?.data?.contentCards?.edges && res?.data?.contentCards.edges.length > 0) {
          _setContents(oldContents => [...oldContents, ...res.data.contentCards.edges])
          let imgRes = { width: window.innerWidth - 60 };

          let parsedContents = [];
          // Parse the available edge data to render Card
          res.data.contentCards.edges.forEach(item => {
            if (Object.keys(item).length > 2) {
              parsedContents.push(contentParser(item, item.type, imgRes))
            }
          });
          _setParsedContents(oldPContents => [...oldPContents, ...parsedContents]);
          _setFilters({ ...oldFilters })
        } else {
          _setHasMore(false)
        }
        if (res?.data?.contentCards?.meta) {
          _setQueryMeta({ ...res.data?.contentCards.meta });
        }
      })
      .finally(() => {
        _setLoadMore(false);
        _setIsLoading(false);

      })
  }
  const loadMoreData = () => {
    _setLoadMore(true);
    //Trigger loading more items based
  };
  useEffect(() => {
    if (loadMore) {
      fetchContents();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loadMore]);

  useEffect(() => {
    // Disable fetching of more data if total limit has been reached
    if (contents.length && queryMeta.total && queryMeta.total > -1 && contents.length >= queryMeta.total) {
      _setHasMore(false)
    }

  }, [contents, queryMeta])


  const handleSearchInput = (name, value) => {
    //Reset All filters, contents and app search text in keywords
    let oldFilters = { ...initFilter };
    oldFilters.keywords = value;
    _setFilters({ ...oldFilters, })
    _setContents([]);
    _setParsedContents([])
    _setQueryMeta({});
    _setHasMore(true);
    _setLoadMore(true);
  }
  const debouncedChange = debounce(handleSearchInput, 500)
  return <Flex bg="#001315" padding="2rem 2rem 0" flexDirection="column" w="100%" minH="100%">
    <SearchBox name="contentSearchBox" handleChange={debouncedChange} />
    <InfiniteScroll loadMore={loadMoreData} hasMore={hasMore} isLoading={isLoading}>
      <Stack gap="3" w="100%">
        {parsedContents.map(item => <ContentCard key={item.id} data={item} />)}
      </Stack>
    </InfiniteScroll>
  </Flex>
};
export default ContentView;