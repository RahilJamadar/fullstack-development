import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Form from './components/Form';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  return (
    <Router>
      <nav className="bg-light p-3">
        <div className="container d-flex justify-content-between">
          <Link className="text-decoration-none fw-bold" to="/">MyApp</Link>
          <div>
            <Link className="m-3 text-decoration-none" to="/About">About</Link>
            <Link className="m-3 text-decoration-none" to="/Contact">Contact</Link>
            <Link className="text-decoration-none" to="/Form">Form</Link>

          </div>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<>Home</>} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path='/Form' element={<Form />} />
      </Routes>
    </Router>
  );
}

export default App;