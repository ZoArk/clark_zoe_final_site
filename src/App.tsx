import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import BasicInfo from './pages/BasicInfo';
import Work from './pages/Work';
import Skills from './pages/Skills';
import Resources from './pages/Resources';

// Navbar component
const Navbar = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="text-xl font-bold text-blue-600 flex items-center">
          <img src={logo} alt="logo" className="w-10 h-10 mr-2" />
          <Link to="/">Zoe Clark</Link>
        </div>
        <div className="space-x-6">
          <Link to="/work" className="text-gray-700 hover:text-blue-500">
            Work
          </Link>
          <Link to="/skills" className="text-gray-700 hover:text-blue-500">
            Skills
          </Link>
          <Link to="/resources" className="text-gray-700 hover:text-blue-500">
            Resources
          </Link>
        </div>
      </div>
    </nav>
  );
};

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<BasicInfo />} />
            <Route path="/work" element={<Work />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/resources" element={<Resources />} />
          </Routes>
        </Router>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

