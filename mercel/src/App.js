import React from 'react'
import './App.css';
import Home from './pages/Home'
import Dashboard from './pages/Dashboard';
function App() {
  const isLoggedIn = false;
  return (
    <>
      {isLoggedIn ? (
        <Dashboard />
      ) : (
        <Home />
      )}
    </>
  )
}

export default App