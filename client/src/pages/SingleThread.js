import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { QUERY_THREAD } from "../utils/queries";
import ReplyList from "../components/ReplyList";
import ReplyForm from "../components/ReplyForm";
import Auth from '../utils/auth';


const SingleThread = props => {

  const {id: threadId } = useParams();

  const { loading, data } = useQuery(QUERY_THREAD, {
    variables: { id: threadId }
  });

  const thread = data?.thread || {};

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <main>
      <div className="card m-4">
        <h5 className="card-header text-center">{thread.title}</h5>
        <div className="d-flex topBorder">
          <div className="col-2 cardColOne">
            <p className="mx-2">User info</p>
            <p>{thread.username}</p>
          </div>
          <div className="col-10 cardColTw">
            <p className="mx-2">{thread.content}</p>
          </div>
        </div>
      </div>

      <div>
        {thread.replyCount > 0 && <ReplyList replies={thread.replies} />}
        {Auth.loggedIn() && <ReplyForm replies={thread.replies} />}
      </div>
    </main>
  );
};

export default SingleThread;
