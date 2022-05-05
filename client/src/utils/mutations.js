import { gql } from '@apollo/client';

export const ADD_THREAD = gql`
    mutation addThread($threadTitle: String!, $threadContent: String!) {
        addThread(threadTitle: $threadTitle, threadContent: $threadContent) {
            threads {
            _id
            threadTitle
            threadContent
            }
        }
    }
`;

export const LOGIN = gql`
    mutation login($username: String!, $password: String!) {
        login(username: $username, password: $password) {
        token
        user {
            _id
        }
        }
    }
    `;