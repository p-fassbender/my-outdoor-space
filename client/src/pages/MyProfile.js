import React from 'react'
import { useQuery } from '@apollo/client';
import { QUERY_ME } from '../utils/queries';
import ThreadList from '../components/ThreadList';

const MyProfile = () => {
    const { data } = useQuery(QUERY_ME)
    const me = data?.me || [];
    return (
        <div className='container'>
            <div className='card m-3'>
                <div className='card-header'>
                    <p className='m-0'>{me.username} </p>
                    <p className='small text-muted m-0'>{me.accessLevel}</p>
                </div>
                <div className='card-body d-flex '>
                    <p>Threads: {me.threadCount}</p>
                    <p>Replies: {me.replyCount}</p>
                </div>
            </div>
            <ThreadList threads={me.threads}></ThreadList>
        </div >
    )
}
export default MyProfile;