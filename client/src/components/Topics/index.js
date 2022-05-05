import React from 'react';

const Topics = () => {


    
  return (
    <div className="d-flex topBorder">
    <div className="col-2 cardColOne">
      <p className="m-3">Icon</p>
    </div>
    <div className="col-10 d-flex align-items-center">
      <Link to="/Dynamic" className="m-2">Dynamic</Link>
    </div>
  </div>
  );
};

export default Topics;