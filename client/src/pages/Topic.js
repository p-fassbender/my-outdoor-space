import React from 'react'
import { useLocation } from 'react-router-dom'
import { useQuery } from '@apollo/client';
import { QUERY_THREADS } from '../utils/queries';
import ThreadForm from '../components/ThreadForm'
import ThreadList from '../components/ThreadList';
import Auth from '../utils/auth';


const Topic = () => {
    const location = useLocation();
    const state = location.state;

    console.log(state)

    const { data } = useQuery(QUERY_THREADS, {
        variables: { topic: state.currentTopic }
    })
    const threads = data?.threads || [];

    console.log(threads)
    // query all threads for state.currentTopic
    return (
        <>
            {Auth.loggedIn() && (
                <div className='card m-4'>
                    <ThreadForm topic={state.currentTopic} />
                </div>
            )}

            <div>
                <ThreadList threads={threads} />
            </div>
        </>
    )
}

export default Topic;