import React from 'react';
//import { Link } from 'react-router-dom';

const ThreadList = ({ threads }) => {

    return (
        <div>
            <h2>Thread Bare</h2>
             {threads &&
             threads.map(thread => (
                <div key={thread._id} className="card mb-3">
                    <p className='card-header'>

                        {threads.threadTitle}

                    </p>
                </div>
            ))}
        </div>
    )

}

export default ThreadList;