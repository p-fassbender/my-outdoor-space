import { gql } from '@apollo/client';

// get all genres
export const QUERY_GENRES = gql`
    query Genres {
        genres {
            _id
            title
        }
    }
`

// get all topics for one genre
export const QUERY_TOPICS = gql`
    query Topics($genre: ID) {
        topics(genre: $genre) {
            _id
            title
            description
            genre
            threadCount
            threads {
                _id
                title
                content
                image
                username
                topic
             
            }
        }
    }
`;

export const QUERY_THREADS = gql`
    query Threads($topic: ID) {
        threads(topic: $topic) {
            _id
            title
            content
            image
            username
            topic
            replyCount 
            replies {
                content
            }
        }
    }
`

export const QUERY_THREAD = gql`
    query Thread($id: ID!) {
        thread(_id: $id) {
            _id
            title
            content
            image
            username
            topic
   
        }
    }
`