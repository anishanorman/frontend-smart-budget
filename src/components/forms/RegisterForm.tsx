import React, { useState, useEffect } from "react";
import "../../css/PasswordMeter.css";
import CheckPasswordStr from "./functions/CheckPasswordStr";
import PasswordMeterRd from "./functions/PasswordMeterRd";
import { useNavigate } from "react-router-dom"

const backEndUrl = "https://rails-orqd.onrender.com"

export default function RegisterForm(props: any) {

  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    pw_hash: "",
    city: "",
    county: "",
    country: "",
  });

  // initialize the state variable for the button useability
  const [valid, setValid] = useState(false);
  

  // handles the changes to the form inputs
  // Server refreshes after new input, this function prevents the deletion of said inputs  
  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const element: HTMLInputElement = event.target;
    const { name, value } = element;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  }

  // handle form submission
  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    let response: any = await fetch(`${backEndUrl}/users`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData)
    })
    response = await response.json()
    sessionStorage.setItem("auth_token", response.token)
    console.log(sessionStorage.getItem("auth_token"))
    console.log("Register Successful!")
    navigate("/")
  }
  
  // UseEffect hook  that allows you to perform certain after effects in a function components
  useEffect(() => {
    // set more form validations here if needed

    // checks password strength to certain condtions 
    let strength = CheckPasswordStr(formData.pw_hash);
    // Using the password strength to visual display the meter reading 
    PasswordMeterRd(strength);

    // checks if conditions are met for the submit button to be useable
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
      <input
        value={formData.email || ""}
        onChange={handleChange}
        name="email"
        type="email"
        placeholder="Enter Email"
      />
      <br />
        <input
          id="password"
          value={formData.pw_hash || ""}
          onChange={handleChange}
          name="pw_hash"
          type="password"
          placeholder="Enter Password"
      />
        {/* <div id = "promt">
          <span></span>
        </div> */}
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
        <input
        value={formData.county || ""}
        onChange={handleChange}
        name="county"
        type="text"
        placeholder="Enter County"
        />
      <br />
      <input
      value={formData.country || ""}
      onChange={handleChange}
      name="country"
      type="text"
      placeholder="Enter Country"
      />
      <br />
      <a href="/login"> Already Registered?</a>
      <br />
        <button disabled={!valid} type="submit">Submit</button>
    </form>
  )
}
      


