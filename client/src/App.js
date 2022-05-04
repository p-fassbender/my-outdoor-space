import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import Login from './pages/Login';
import Signup from './pages/Signup'
import SingleThread from './pages/SingleThread';

import {
    ApolloClient,
    InMemoryCache,
    ApolloProvider,
    createHttpLink
} from '@apollo/client';

import { setContext } from '@apollo/client/link/context';

const httpLink = createHttpLink({
    uri: '/graphql',
  });
  
const authLink = setContext((_, { headers }) => {
    const token = localStorage.getItem('id_token');
    return {
      headers: {
        ...headers,
        authorization: token ? `Bearer ${token}` : '',
      },
    };
  });

const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
});

function App() {
    return (
        <ApolloProvider client={client}>
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
        </ApolloProvider>
    )
}

export default App;