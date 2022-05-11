import React from 'react';
import { Link } from 'react-router-dom';

const ReplyList = ({ replies }) => {
    return (
        <div className='card m-4'>
            <div className='card-header'>
                <span className='text-dark'>Replies</span>
            </div>
            <div className='card-body px-0'>
                {replies &&
                    replies.map(reply => (
                        <div key={reply._id} >
                            <p className='pill m-0 p-3 topBorder'>
                                {reply.content}
                                <Link to={`/user/${reply.username}`}> - {reply.username}</Link>
                            </p>

                        </div>
                    ))}
            </div>
        </div>
    );
};

export default ReplyList;