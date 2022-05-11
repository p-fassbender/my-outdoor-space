import React from 'react'
import { useQuery } from '@apollo/client';
import { QUERY_TOPICS } from '../../utils/queries';
import { Link } from 'react-router-dom';

const TopicList = ({ genre }) => {
    const { data } = useQuery(QUERY_TOPICS, {
        variables: { genre: genre.title }
    })
    const topicsArray = data?.topics || [];

    return (
        <>
            {topicsArray.map(topic => (
                <li key={topic._id} className="d-flex topBorder">
                    <div className="col-10 d-flex flex-column align-items-left cardColOne">
                        <Link to='/topic' state={{ currentTopic: topic.title }} className="ps-3">{topic.title}</Link>
                        <small className='fw-light ps-3'>{topic.description}</small>
                    </div>
                    <div className="col-2 ">
                        <p className="m-3">Threads: {topic.threadCount}</p>
                    </div>
                </li>
            ))}
        </>
    )
}
export default TopicList;