import React, { useState, useEffect } from "react";
import "./RegisterForm.css";
import CheckPasswordStr from "./CheckPasswordStr";
import PasswordMeterRd from "./PasswordMeterRd";




export default function RegisterForm(props: any) {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    city: "",
    county: "",
  });

  // initialize the state variable for the button useability
  const [valid, setValid] = useState(false);
  // initialize the state variable for password strength 


  // handle changes to the form inputs
  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const element: HTMLInputElement = event.target;
    const { name, value } = element;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  }

  // handle form submission
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    console.log(`Form data: ${JSON.stringify(formData)}`);

    // you can add additional code here to handle the form submission, such as sending the form data to a backend server
  }
  

  // UseEffect hook  that allows you to perform certain after effects in a function components

  useEffect(() => {
    // checks password strength to certain condtions 
    let strength = CheckPasswordStr(formData.password);
    // Using the password strength to visual display the meter reading 
    PasswordMeterRd(strength);
  });

  useEffect(() => {
    // checks if conditions are met for the submit button to be useable
    // set more form validations here if needed

    // a varriable that can only store the constructor/object's properties value.
    const formValues = Object.values(formData);
    // the varriable becomes inclusive of all properties while the function checks if the properties !==v resulting in a boolean 
    const isFormFilled= formValues.every(checkValue)
    function checkValue(x:any){
      return x !== ""
    }
    if (isFormFilled === true){
      setValid(true)
    }else{
      setValid(false)
    }
  }, [formData]);



  // render the form
  return (
    <form id="registerForm" onSubmit={handleSubmit}>
      <h2>Register</h2>
      <br />
      <input
        value={formData.username || ""}
        onChange={handleChange}
        name="username"
        type="text"
        placeholder="Enter Username"
      />
      <br />
      <br />
      <input
        value={formData.email || ""}
        onChange={handleChange}
        name="email"
        type="email"
        placeholder="Enter Email"
      />
      <br />
      <br />
        <input
          id= "password"
          value={formData.password || ""}
          onChange={handleChange}
          name="password"
          type="password"
          placeholder="Enter Password"
        />
        <div id = "promt">
          <span></span>
        </div>
        <div id="password_meter">
          <div id="password_indicator">
            <span>Weak</span>
          </div>
        </div>
        <br />
        <input
          value={formData.city || ""}
          onChange={handleChange}
          name="city"
          type="text"
          placeholder="Enter City"
        />
      <br />
      <br />
        <input
        value={formData.county || ""}
        onChange={handleChange}
        name="county"
        type="text"
        placeholder="Enter County"
        />
      <br />
      <br />
      <a href="/login"> Already Registered?</a>
      <br />
        <button disabled={!valid} type="submit">Submit</button>
    </form>
  )
}
      


