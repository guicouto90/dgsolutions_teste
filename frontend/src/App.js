import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Register from './pages/Register';
import ListRegister from './pages/ListRegister';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/register" element={ <Register /> }/>
        <Route path="/" element={<Navigate replace to="/register"/>} />
        <Route path="/list-register" element={ <ListRegister /> }/>
      </Routes>
    </Router>
  );
}

export default App;
