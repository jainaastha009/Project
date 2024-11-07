import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Component/Login';
import Dashboard from './Component/Dashboard';
import Sidebar from './Component/Sidebar';
import History from './Component/History';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Sidebar />}>
          <Route path='dashboard' element={<Dashboard/>}/>
          <Route path="history" element={<History />} /> {/* Adjusted path */}
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
