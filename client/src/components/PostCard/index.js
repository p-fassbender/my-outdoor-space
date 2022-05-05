import React from "react";

const PostCard = () => {

  
  return (
    <div className="card m-4">
      <h5 className="card-header text-center">Dynamic Thread name</h5>
      <div className="d-flex topBorder">
        <div className="col-2 cardColOne">
          <p className="mx-2">User info</p>
        </div>
        <div className="col-10 cardColTw">
          <p className="mx-2">The post content goes here.</p>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
