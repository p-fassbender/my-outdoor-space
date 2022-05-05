import { gql } from '@apollo/client';

export const QUERY_THREADS = gql`
    query threads($threadTitle: String, $threadContent: String) {
        threads(threadTitle: $threadTitle, threadContent: $threadContent) {
            _id
            threadTitle
            threadContent
            threadImage
            replies {
                _id: ID
                replyTitle: String
                replyContent: String
            }
        }
    }
`