import React from 'react';
//import { Link } from 'react-router-dom';

const ThreadList = ({ threads }) => {

    return (
        <div>
            <h2>Thread Bare...</h2>
             {threads &&
             threads.map(thread => (
                <div key={thread._id} className="card mb-3">
                    <p className='card-header'>
                        {thread.threadTitle}
                    </p>
                    <h3>
                        {thread.threadContent}
                    </h3>
                </div>
            ))}
        </div>
    )

}

export default ThreadList;