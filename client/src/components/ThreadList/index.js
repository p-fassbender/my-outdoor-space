import React from 'react';
import { Link } from 'react-router-dom';

const ThreadList = ({threads}) => {
   
    return (
        <div>
            <h2> Current Threads </h2>
            <div>
             {threads &&
             threads.map(thread => (
                <div key={thread._id} className="card mb-3">
                    <h3 className='card-header'>
                        {thread.threadTitle}
                    </h3>
                    <p>
                        {thread.threadContent}
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
