import { gql } from '@apollo/client';

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

export const ADD_USER = gql`
    mutation addUser($username: String! $password: String!) {
        addUser(username: $username password: $password) {
            token
            user {
                _id
            }
        }
    }
`;

export const ADD_THREAD = gql`
    mutation AddThread($title: String!, $content: String!, $topic: String!) {
        addThread(title: $title, content: $content, topic: $topic) {
            _id
            title
            content
            image
            username
            topic
            replyCount
            replies {
                _id
                content
                username
                thread
            }
        }
    }
`;

export const ADD_REPLY = gql`
    mutation AddReply($content: String!, $thread: String!) {
        addReply(content: $content, thread: $thread) {
            _id
            content
            username
            thread
        }
    }
`

export const DELETE_THREAD = gql`
    mutation deleteThread($id: ID!, $topic: String!) {
        deleteThread(_id: $id, topic: $topic) {
            _id
        }
    }
`