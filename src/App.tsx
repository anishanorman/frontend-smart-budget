import { useState,useEffect } from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import ViewIncome from './pages/Income';
import ViewFixedOutgoings from './pages/FixedOutgoing';


function App() {

  const [loggedIn, setLoggedIn] = useState(true)

  return (
         <BrowserRouter>
            <Routes>
              <Route path="/home" element={<Home loggedIn={loggedIn} />} />
              <Route path="/login" element={<Login loggedIn={loggedIn} setLoggedIn={setLoggedIn} />} />
              <Route path="/register" element={<Register loggedIn={loggedIn} setLoggedIn={setLoggedIn} />} />
              <Route path="/income" element={<ViewIncome loggedIn={loggedIn} />} />
              <Route path="/outgoing" element={<ViewFixedOutgoings loggedIn={loggedIn} />} />
            </Routes>
         </BrowserRouter>
  )
}

export default App
