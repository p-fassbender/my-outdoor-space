import { gql } from '@apollo/client';

export const ADD_THREAD = gql`
    mutation addThread($threadTitle: String!, $threadContent: String!) {
        addThread(threadTitle: $threadTitle, threadContent: $threadContent) {
            thread {
            _id
            threadTitle
            threadContent
            }
        }
    }
`;