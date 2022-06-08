import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Register from './pages/Register';
import ListRegister from './pages/ListRegister';
import EditRegister from './pages/EditRegister';
import Provider from './context/Provider';

function App() {
  return (
    <Provider>
      <Router>
        <Routes>
          <Route path="/register" element={ <Register /> }/>
          <Route path="/" element={<Navigate replace to="/register"/>} />
          <Route path="/list-register" element={ <ListRegister /> }/>
          <Route path="/edit-register" element={ <EditRegister /> }/>
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
