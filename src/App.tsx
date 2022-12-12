import React, { useState } from 'react';
import './App.css';
import Logo from "./components/Logo"
import RegisterForm from "./components/RegisterForm"


function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const [currentComponents, setCurrentComponents] = useState([<Logo />, <RegisterForm />])

  return (
      <div className="App">
          {currentComponents}
      </div>
  )
}

export default App
