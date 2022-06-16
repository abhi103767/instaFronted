import React from 'react';
import { Route, Routes } from 'react-router-dom';
// importing components
import Login from './components/login/Login/Login';
function App() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />}></Route>
      </Routes>
    </>
  );
}

export default App;
