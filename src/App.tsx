import React, { useState } from 'react';
import './App.css';
import RegisterForm from './components/RegisterForm'
import Logo from "./components/Logo"


function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false)

  return (
      <div className="App">
          <Logo />
          {isLoggedIn ? (<p>Home screen</p>) : (<RegisterForm />)}
      </div>
  );
}

export default App;
