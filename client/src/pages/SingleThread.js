import React from "react";

const SingleThread = (props) => {
  // if (loading) {
  //     return <div>Loading...</div>;
  //   }

  return (

      <div className="card m-4">
        <h5 className="card-header text-center">Response</h5>
        <div className="d-flex topBorder">
          <div className="col-2 cardColOne">
            <p className="mx-2">User info</p>
          </div>
          <div className="col-10 cardColTw">
            <p className="mx-2">The reply content goes here.</p>
          </div>
        </div>
      </div>

  );
};

export default SingleThread;
