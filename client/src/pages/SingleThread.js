import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { QUERY_THREADS } from "../utils/queries";

const SingleThread = props => {

  const {id: threadId } = useParams();

  const { loading, data } = useQuery(QUERY_THREADS, {
    variables: { id: threadId }
  });

  const thread = data?.thread || {};

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <main>
      <div className="card m-4">
        <h5 className="card-header text-center">{thread.threadTitle}</h5>
        <div className="d-flex topBorder">
          <div className="col-2 cardColOne">
            <p className="mx-2">User info</p>
          </div>
          <div className="col-10 cardColTw">
            <p className="mx-2">{thread.threadContent}</p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default SingleThread;
