import { Flex, Text } from '@chakra-ui/react';
import React, { useState, useEffect } from 'react';
import debounce from '../../utils/debounce';
import CardSkeleton from '../cardSkeleton';
const InfiniteScroll = (props) => {
  const [isError, setIsError] = useState(false);




  useEffect(() => {
    let prevBoundingRect = window.pageYOffset;
    let { hasMore, isLoading } = props;
    const handleScroll = debounce(async () => {
      const boundingRect = document.getElementById('scroller').getBoundingClientRect();
      if (boundingRect.bottom <= window.innerHeight + 350 && hasMore && window.pageYOffset > prevBoundingRect - 1) {
        if (!isLoading) {
          try {
            await props.loadMore();
          } catch (error) {
            setIsError(true);
          }
        }
        prevBoundingRect = window.pageYOffset
      }
    }, 100);
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.hasMore]);


  return (
    <Flex flex="1 1" overflow="scroll" w="100%" id="scroller" flexDirection="column" mb="20px">
      {props.children}
      {props.isLoading && <><CardSkeleton /><CardSkeleton /></>}
      {!props.hasMore && <Text color="white" mt={3}> That's It... We are working hard to bring more contents for you </Text>}
      {isError && <Text color="white" mt={3}> Error occurred while loading data.... Please Retry or Connrct with us </Text>}
    </Flex>
  );
};

export default InfiniteScroll;
