import React from 'react';
//import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_THREADS } from '../../utils/queries';

const ThreadList = ({threads}) => {
   
   

    return (
        <div>
            <h2> Current Threads </h2>
            <div>
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
        </div>
    )

}

export default ThreadList;
