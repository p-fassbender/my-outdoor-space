import React from 'react'
import { useLocation } from 'react-router-dom'
import { useQuery } from '@apollo/client';
import { QUERY_THREADS } from '../utils/queries';
import ThreadForm from '../components/ThreadForm'
import ThreadList from '../components/ThreadList';

const Topic = () => {
    const location = useLocation();
    const state = location.state;
    console.log(state.currentTopic)

    const { data } = useQuery(QUERY_THREADS, {
        variables: { genre: state.currentTopic }
    })
    const threads = data?.threads || [];
    console.log(threads)

    // query all threads for state.currentTopic
    return (
        <>
            <div className='card m-4'>
                <ThreadForm topic={state.currentTopic} />
            </div>
            <div>
                <ThreadList threads={threads} />
            </div>
        </>
    )
}

export default Topic;