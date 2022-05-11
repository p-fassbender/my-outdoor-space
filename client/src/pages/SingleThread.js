import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { QUERY_THREAD } from "../utils/queries";
import Auth from '../utils/auth';
import ReplyForm from "../components/ReplyForm";
import ReplyList from '../components/ReplyList'

const SingleThread = props => {
    const { id } = useParams();
    const { loading, data } = useQuery(QUERY_THREAD, {
        variables: { id: id }
    });
    const thread = data?.thread || {};

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <>
            <div className="card m-4">
                <h3 className='card-header'>
                    {thread.title}
                    <Link to={`/user/${thread.username}`}> - {thread.username}</Link>
                </h3>
                <p className='mx-3 mt-2'>
                    {thread.content}
                </p>
            </div>
            {Auth.loggedIn() && (
                <div className='card m-4'>
                    <ReplyForm id={id} thread={thread.title}/>
                </div>
            )}

            <div>
                <ReplyList replies={thread.replies}/>
            </div>
        </>
    );
};

export default SingleThread;
