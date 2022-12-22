import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"



export default function SplashContent(props: any) {

  const navigate = useNavigate()
  // initialize the state variable for the button useability
  const [valid, setValid] = useState(false);
  

  // handles the changes to the form inputs
  // Server refreshes after new input, this function prevents the deletion of said inputs  
  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const element: HTMLInputElement = event.target;
    const { name, value } = element;
    
  }

  // handle form submission
  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    
  }
  
  // UseEffect hook  that allows you to perform certain after effects in a function components
  useEffect(() => {
    
    
  });
  return (
    <div id ="splash">
      <div>
        <img src='logo.png' alt='Logo' />
      </div>
      <div className="pageContent">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <h3 id = 'splash_name'>
        SMART SPENDING
      </h3>
    </div>
  )
  
};


      


