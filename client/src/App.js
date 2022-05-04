import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import Login from './pages/Login';
import Signup from './pages/Signup';
import SingleThread from './pages/SingleThread';

function App() {
    return (
        <Router>
            <div className='container d-flex flex-column'>
                <Header />
                    <Routes>
                        <Route exact path="/" element={<Home />} />
                        {/* <Route path="/topic/:topicId" element={<TopicPage />} /> */}
                        <Route exact path="/login" element={< Login/>} />
                        <Route exact path="/signup" element={<Signup />} />
                        <Route exact path="/thread/" element={<SingleThread />} />
                    </Routes>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
