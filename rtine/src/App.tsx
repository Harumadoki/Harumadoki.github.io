import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Projects from './components/Projects/Projects';
import { BrowserRouter as Router, Link, Routes, Route } from 'react-router-dom';
import About from './components/About/About';

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Routes>
          <Route path='/about' element={<About />} />
          <Route path='/projects' element={<Projects />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
