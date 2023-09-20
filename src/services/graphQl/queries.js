import { gql } from "@apollo/client";
export const GET_CONTENT = gql`
  query contentCards ($filter: ContentCardsFilter, $sorting: ContentCardsSorting, $tags:[String!],  $language: String,) {
    contentCards(filter : $filter, sorting : $sorting, tags:$tags) {
      edges {
        ... on Podcast {
          id
          slug
          name
          preamble
          image {
            uri
            id
            alt
            width
          }
          length(language: $language)
          entryLevel
          isFree
          contentSegments {
            header
            paragraph
          }
          experts {
            biography
            company
            firstName
            lastName
          }
          categories {
            name
            slug
          }
          createdAt
          updatedAt
          deletedAt
          publishedAt
          rating
          timeSpentOnByUsers
          type
        }
        ... on Ebook {
          id
          slug
          name
          preamble
          image {
            uri
            id
            alt
            width
          }
          entryLevel
          isFree
          contentSegments {
            header
            paragraph
          }
          experts {
            biography
            company
            firstName
            lastName
          }
          categories {
            name
            slug
          }
          createdAt
          updatedAt
          deletedAt
          publishedAt
          rating
          timeSpentOnByUsers
          type
          readLength : length(language: $language)
        }
      }
      meta {
        limit
        offset
        recommendationId
        total
      }
    }
  }
`;