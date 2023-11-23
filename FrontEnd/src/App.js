import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import Home from './Home';
import { Login } from "./Login";
import { Register } from "./Register";
import logo from './mysoftwarestorewebp.png'
import cart from './Cart.png'

function App() {
  const [currentForm, setCurrentForm] =useState('login');
  const toggleForm =(formName)=>{
    setCurrentForm(formName);
  }
  return (
    <Router>
      <div className="App">
        <head>
        <meta charset="utf-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <title>MySoftwareStore</title>
        <link rel="shortcut icon" type="image/PNG" href="./mysoftwarestorewebp.png"/>
        </head>
        <nav>
        <div className="nav-left">
          <img src={logo} alt="Logo" className="nav-logo" />
          <Link to="/">Home</Link>
          <Link to="/login">Login</Link>
        </div>
        <div className="nav-right">
          <input type="text" placeholder="Search..." className="search-bar"/>
          <Link to="/cart"><img src={cart} alt="Cart" className="cart-logo" /></Link>
        </div>
        </nav>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={currentForm === "login" ? <Login onFormSwitch={toggleForm} /> : <Register onFormSwitch={toggleForm} />} />
          </Routes>
        </div>
      </Router>
   );
  }
export default App;
