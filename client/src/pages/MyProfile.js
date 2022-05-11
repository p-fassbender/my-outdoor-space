import React from 'react'
import { useQuery } from '@apollo/client';
import { QUERY_ME } from '../utils/queries';
import ThreadList from '../components/ThreadList';

const MyProfile = () => {
    const { data } = useQuery(QUERY_ME)
    const me = data?.me || [];


    return (
        <div className='d-flex justify-content-center'>
            <div className='card m-4' style={{ minWidth: "600px" }}>
                <div>
                    <h2 className='card-header text-center'>My Profile</h2>
                    <div className="m-3">
                        <div className='mb-2'>
                            <div className='m-3'>
                                <label>Username</label>
                                <p className='m-0 profile-text'>{me.username} </p>
                            </div>
                            <div className='m-3'>
                                <label>User Permissions</label>
                                <p className='m-0  profile-text'>{me.accessLevel}</p>
                            </div>
                            <div className='m-3'>
                                <label>User Thread Count</label>
                                <p className='m-0 profile-text'>{me.threadCount}</p>
                            </div>
                            <div className='m-3'>
                                <label>User Replies</label>
                                <p className='m-0 profile-text'>{me.replyCount}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ThreadList threads={me.threads}></ThreadList>
        </div>
    )
}
export default MyProfile;