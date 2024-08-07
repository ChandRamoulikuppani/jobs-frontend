import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home';
import Spacer from './pages/Spacer/Spacer';

function App() {
  return (
    <div className="relative min-h-screen">
      <Navbar />
      <Spacer height="4rem" /> 
      <Home />
    </div>
  );
}

export default App;
