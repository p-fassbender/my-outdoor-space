import React from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import Auth from '../../utils/auth';
import { DELETE_THREAD } from '../../utils/mutations';
import { QUERY_GENRES, QUERY_ME, QUERY_THREAD, QUERY_THREADS, QUERY_TOPICS, QUERY_USER } from '../../utils/queries';

const ThreadList = ({ threads }) => {
    const [deleteThread] = useMutation(DELETE_THREAD, {
        refetchQueries:[
            QUERY_GENRES,
            QUERY_TOPICS,
            QUERY_THREADS,
            QUERY_ME,
            QUERY_USER,
            QUERY_THREAD
        ]
    });

    const handleDelete = async (id, topic) => {
        try {
            await deleteThread({
                variables: { id: id, topic: topic }
            });
        } catch (e) {
            console.log(e);
        }
    };

    return (
        <div className='m-4'>
            {threads &&
                threads.map(thread => (
                    <div key={thread._id} className="card mb-3">
                        <h3 className='card-header'>
                            {thread.title}
                            <Link to={`/user/${thread.username}`}> - {thread.username}</Link>
                        </h3>
                        {(Auth.loggedIn() && Auth.getProfile().data.username === thread.username) && (
                            <button className='btn btn-danger' onClick={() => handleDelete(thread._id, thread.topic)}>Delete</button>
                        )}
                        <p className='mx-3 mt-2'>
                            {thread.content}
                        </p>
                        <Link to={`/thread/${thread._id}`}> <button className="btn">
                            Join the discussion
                        </button>
                        </Link>
                    </div>
                ))}
        </div>
    )

}

export default ThreadList;
