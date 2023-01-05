import React, { useState, useEffect } from "react";
import "../../css/Registration.css";
import EmailReq from "./functions/EmailReq";
import {EmailValid} from"./functions/EmailReq";
import CheckPasswordStr from "./functions/CheckPasswordStr";
import PasswordMeterRd from "./functions/PasswordMeterRd";
import PasswordCriteria from "./functions/PasswordCriteria";
import PasswordReq from "./functions/PasswordReq";
import {PasswordActive}  from "./functions/PasswordReq";
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

  // Initialize the state variable for the button useability
  const [valid, setValid] = useState(false);
  

  // Handles the changes to the form inputs
  // Server refreshes after new input, this function prevents the deletion of said inputs  
  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const element: HTMLInputElement = event.target;
    let { name, value } = element;
  
  // Remove the space character from the value
  if (name === "username" || name === "email" || name === "pw_hash") {
    if (value.includes(" ")) {
      value = value.replace(" ", "");
    }
  }
    
  // Make sure the first character is capitalized and only contain letters and spaces
  if (name === "county" || name === "city" || name === "country") {
    if (!/^[A-Z]/.test(value)) {
      value = value.charAt(0).toUpperCase() + value.slice(1);
    }
    value = value.replace(/[^A-Za-z ]/g, '');
  }
    
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
    if (response.ok) {
      response = await response.json()
      console.log(response)
      sessionStorage.setItem("auth_token", response.token)
      props.setLoggedIn(true)
      navigate("/")
    } else {
      alert("The email has already been registered. Please try a different email or Already Registered")
    }
  }
  
  // UseEffect hook  that allows you to perform certain after effects in a function components
  useEffect(() => {
    // Set more form validations here if needed
    
    //Storing formData into varriables
    let password = formData.pw_hash;
    let email =  formData.email;
    
   
    //Checks email has met certain condtions
    EmailReq(email)
    // Checks password strength to certain condtions 
    let strength = CheckPasswordStr(formData.pw_hash);
    // Using the password strength to visual display the meter reading 
    PasswordMeterRd(strength);
    // Using the password input to visual display the criteria
    PasswordReq(password);

    // Checks if conditions are met for the submit button to be useable
    // A varriable that stores the constructor/object's properties value.
    const formValues = Object.values(formData);

    // The function checks if the properties !=="" 
    function checkValue(x:any){
      return x !== ""
    }
    const isFormFilled= formValues.every(checkValue)
  
    if (isFormFilled === true && PasswordActive()=== true && EmailValid () === true){
      setValid(true)
    }else{
      setValid(false)
    }
  }, [formData]);



  // render the form
  return (
    <form id="registerForm" onSubmit={handleSubmit}>
      <h3>Create a new account</h3>
      <input className="input"
        value={formData.username || ""}
        onChange={handleChange}
        name="username"
        type="text"
        placeholder="Enter Username"
      /><span className="ast">*</span>
      <br />
      <input className="input"
        id="email"
        value={formData.email || ""}
        onChange={handleChange}
        name="email"
        type="text"
        placeholder="Enter Email"
      /><span className="ast">*</span>
      <div  id="email_prompt">
            Email must have a valid format example@mail.com
        </div>
      <br />
        <input className="input"
          id="password"
          value={formData.pw_hash || ""}
          onChange={handleChange}
          name="pw_hash"
          type="password"
          placeholder="Enter Password"
        /><span className="ast">*</span>
        <div  id="password_prompt">
            Password must meet all complexity requirements 
        </div>
        <div id="password_meter">
          <div id="password_indicator">
            <span>Weak</span>
          </div>
          <PasswordCriteria/> 
        </div>
        <br />
        <br/>
        <input className="input"
          value={formData.city || ""}
          onChange={handleChange}
          name="city"
          type="text"
          placeholder="Enter City"
        /><span className="ast">*</span>
      <br />
        <input className="input"
        value={formData.county || ""}
        onChange={handleChange}
        name="county"
        type="text"
        placeholder="Enter County"
        /><span className="ast">*</span>
      <br />
      <input className="input"
      value={formData.country || ""}
      onChange={handleChange}
      name="country"
      type="text"
      placeholder="Enter Country"
      /><span className="ast">*</span>
      <br />
      <a href="/login"> Already Registered?</a>
      <br/>
      <br />
        <button disabled={!valid} className="orangeBtn" id="length" type="submit">Submit</button>
    </form>
  )
}
      


