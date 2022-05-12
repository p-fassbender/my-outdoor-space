import React from 'react'
import GenreList from '../components/GenreList';
import { useQuery } from '@apollo/client';
import { QUERY_GENRES} from '../utils/queries';

const Home = () => {
    const {data} = useQuery(QUERY_GENRES)
    const genres = data?.genres || [];

 //   console.log(genres);

    return (
        <>
            <GenreList genres={genres}/>
        </>
    )
}

export default Home;