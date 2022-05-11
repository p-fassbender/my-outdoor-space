import React from 'react'
import { useQuery } from '@apollo/client';
import { QUERY_USER } from '../utils/queries';
import { useParams } from 'react-router-dom';

const UserProfile = () => {
    const username = useParams()
    const { data } = useQuery(QUERY_USER, { variables: { username: username.id } })
    const user = data?.user || [];
    return (
        <div className='card m-3'>
            <div className='card-header'>
                <p className = 'm-0'>{user.username} </p>
                <p className='small text-muted m-0'>{user.accessLevel}</p>
            </div>
            <div className='card-body d-flex '>
                <p>Threads: {user.threadCount}</p>
                <p>Replies: {user.replyCount}</p>
            </div>
        </div>
    )
}
export default UserProfile;