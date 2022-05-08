import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {


    return (
        <main>
            <div className='flex-row justify-space-between'>


                <h3>
                    <Link to={`/TopicPage`}>Topics</Link>
                </h3>


            </div>
            <div className="card m-4">
                <h2 className="card-header text-center">Camping</h2>

                <div className="d-flex topBorder">
                    <div className="col-2 cardColOne">
                        <p className="m-3">Icon</p>
                    </div>
                    <div className="col-10 d-flex align-items-center">
                        <Link to="/CarryIn" className="m-2">Carry In</Link>
                    </div>
                </div>

                <div className="d-flex topBorder">
                    <div className="col-2 cardColOne">
                        <p className="m-3">Icon</p>
                    </div>
                    <div className="col-10 d-flex align-items-center">
                        <Link to="/TentCamping" className="m-2">Tent Camping</Link>
                    </div>
                </div>

                <div className="d-flex topBorder">
                    <div className="col-2 cardColOne">
                        <p className="m-3">Icon</p>
                    </div>
                    <div className="col-10 d-flex align-items-center">
                        <Link to="/CamperCamping" className="m-2">Camper Camping</Link>
                    </div>
                </div>

                <div className="d-flex topBorder">
                    <div className="col-2 cardColOne">
                        <p className="m-3">Icon</p>
                    </div>
                    <div className="col-10 d-flex align-items-center">
                        <Link to="/Glamping" className="m-2">Glamping!</Link>
                    </div>
                </div>


                <h2 className="card-header text-center topBorder">Outdoor Living Room</h2>
                <div className="d-flex topBorder">
                    <div className="col-2 cardColOne">
                        <p className="m-3">Icon</p>
                    </div>
                    <div className="col-10 d-flex align-items-center">
                        <Link to="/Patio" className="m-2">Patio</Link>
                    </div>
                </div>

                <div className="d-flex topBorder">
                    <div className="col-2 cardColOne">
                        <p className="m-3">Icon</p>
                    </div>
                    <div className="col-10 d-flex align-items-center">
                        <Link to="/Decks" className="m-2">Decks</Link>
                    </div>
                </div>

                <div className="d-flex topBorder">
                    <div className="col-2 cardColOne">
                        <p className="m-3">Icon</p>
                    </div>
                    <div className="col-10 d-flex align-items-center">
                        <Link to="/WaterFeatures" className="m-2">Water Features</Link>
                    </div>
                </div>


                <h2 className="card-header text-center topBorder">Survival</h2>

                <div className="d-flex topBorder">
                    <div className="col-2 cardColOne">
                        <p className="m-3">Icon</p>
                    </div>
                    <div className="col-10 d-flex align-items-center">
                        <Link to="/Weekend" className="m-2">Weekend Trips</Link>
                    </div>
                </div>

                <div className="d-flex topBorder">
                    <div className="col-2 cardColOne">
                        <p className="m-3">Icon</p>
                    </div>
                    <div className="col-10 d-flex align-items-center">
                        <Link to="/Week" className="m-2">Week Long Trips</Link>
                    </div>
                </div>

                <div className="d-flex topBorder">
                    <div className="col-2 cardColOne">
                        <p className="m-3">Icon</p>
                    </div>
                    <div className="col-10 d-flex align-items-center">
                        <Link to="/Extended" className="m-2">Extended Period Trips</Link>
                    </div>
                </div>

                <h2 className="card-header text-center topBorder">General Discussion</h2>

                <div className="d-flex topBorder">
                    <div className="col-2 cardColOne">
                        <p className="m-3">Icon</p>
                    </div>
                    <div className="col-10 d-flex align-items-center">
                        <Link to="/Lounge" className="m-2">"The Lounge"</Link>
                    </div>
                </div>

                <div className="d-flex topBorder">
                    <div className="col-2 cardColOne">
                        <p className="m-3">Icon</p>
                    </div>
                    <div className="col-10 d-flex align-items-center">
                        <Link to="/SwapMeet" className="m-2">Swap Meet</Link>
                    </div>
                </div>
            </div>
        </main >
    );
};

export default Home;