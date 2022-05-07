import React from 'react';
import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import ThreadForm from '../components/ThreadForm';
import ThreadList from '../components/ThreadList';
import { QUERY_THREADS } from '../utils/queries';

const TopicPage = () => {

    const { data } = useQuery(QUERY_THREADS);

    const threads = data?.threads || [];

    return (
        <main>
            <div className='card m-4'>
                <ThreadForm />
            </div>

            <div className="card m-4">
                <h2 className="card-header text-center">Dynamic header, based of /TopicPage/:id</h2>

                <div className="d-flex topBorder">
                    <div className="d-flex align-items-center">
                        <Link to="/Post/:postId" className="m-2">I broke my tent poles and had to make one out of sticks.THIS IS THREAD CONTENT AND POST TITLE/HEADER</Link>
                    </div>
                </div>

                <div className="d-flex topBorder">
                    <div className="d-flex align-items-center">
                        <Link to="/Post/:postId2" className="m-2">AITA, It started when the site next to use pulled out 6 coolers... THIS IS THREAD CONTENT AND POST TITLE/HEADER</Link>
                    </div>
                </div>

                <div className="d-flex topBorder">
                    <div className="d-flex align-items-center">
                        <ThreadList threads={threads}/>
                        
                    </div>
                </div>


            </div>

        </main>


    );
};

export default TopicPage;

