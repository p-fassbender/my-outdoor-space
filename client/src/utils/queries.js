import { gql } from '@apollo/client';

export const QUERY_THREADS = gql`
    query { 
    threads {
            _id
            threadTitle
            threadContent
            threadImage

        }
}
`