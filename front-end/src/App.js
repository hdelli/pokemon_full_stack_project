
import './App.css';
import Navbar from './containers/Navbar';
import Footer from './containers/Footer';
import Home from './pages/Home';
import Login from './pages/Login';
import Map from './pages/Map';
import Signup from './pages/Signup';
import Pokedex from './pages/Pokedex';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { useState } from 'react';


function App() {

  const [currentUser, setCurrentUser] = useState(null)

  return (
    <Router>
      <div className="bg-overlay">
        <div className="app">
          <Navbar />

          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/signup" element={<Signup />} />
            <Route exact path="/map" element={<Map />} />
            <Route exact path="/pokedex" element={<Pokedex />} />
          </Routes>

          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
