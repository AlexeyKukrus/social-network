// App.tsx

import React from 'react';

import { Navigate, BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { PrivateRouteProps } from './types/prop-types';

import Auth from './pages/auth/Auth';
import Layout from './components/layout/Layout';
import Home from './pages/home/Home';
import Profile from './pages/profile/Profile';
import Messages from './pages/messages/Messages';
import Message from './pages/message/Message';
import Friends from './pages/friends/Friends';
import NotFound from './pages/not-found/NotFound';

const PrivateRoute: React.FC<PrivateRouteProps> = ({children, auth}) => {
  return auth ? children : <Navigate to='/auth' />
}
const App: React.FC = () => {
  const isAuthenticated = true;
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<PrivateRoute auth={isAuthenticated}><Home/></PrivateRoute>}/>
          <Route path="/auth" element={<Auth />} />
          <Route path="/profile/:id" element={<PrivateRoute auth={isAuthenticated}><Profile /></PrivateRoute>} />
          <Route path="/messages" element={<PrivateRoute auth={isAuthenticated}><Messages /></PrivateRoute>} />
          <Route path="/message/:id" element={<PrivateRoute auth={isAuthenticated}><Message /></PrivateRoute>} />
          <Route path="/friends/:id" element={<PrivateRoute auth={isAuthenticated}><Friends /></PrivateRoute>} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;