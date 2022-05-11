import React from 'react';
import { Link } from 'react-router-dom';

const ThreadList = ({threads}) => {
   
    return (
        <div>
            <div className='m-4'>
             {threads &&
             threads.map(thread => (
                <div key={thread._id} className="card mb-3">
                    <h3 className='card-header'>
                        {thread.title}
                        <Link to={`/user/${thread.username}`}> - {thread.username}</Link>
                    </h3>
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
        </div>
    )

}

export default ThreadList;
