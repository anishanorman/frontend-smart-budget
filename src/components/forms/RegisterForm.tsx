import React, { useState, useEffect } from "react";
const backEndUrl = "https://rails-orqd.onrender.com"



export default function RegisterForm(props: any) {
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
  // initialize the state variable for password strength 
  const [passwordStrength, setPasswordStrength] = useState("");

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
    return response
  }

  // function that determines the strength of the password 
  function checkPasswordStrength(pw_hash: string) {
    if (pw_hash.length < 8) {
      return "Password Strength: Weak";
    } else if (pw_hash.length >= 8 && pw_hash.length < 12) {
      return "Password Strength: Medium";
    } else {
      return "Password Strength: Strong";
    }
  }

  useEffect(() => {
    // Check password strength whenever password changes
    setPasswordStrength(checkPasswordStrength(formData.pw_hash));
  }, [formData.pw_hash]);

  // UseEffect hook  that allows you to perform side effects in function components
  useEffect(() => {
    // set more form validations here if needed

    const passwordStrength = checkPasswordStrength(formData.pw_hash);
    if (
      formData.username !== "" &&
      formData.email !== "" &&
      (formData.pw_hash !== "" && passwordStrength !== "Password Strength: Weak") &&
      formData.city !== "" &&
      formData.county !== "" &&
      formData.country !== "")
     {
      setValid(true);
    } else {
      setValid(false);
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
        value={formData.pw_hash || ""}
        onChange={handleChange}
        name="pw_hash"
        type="password"
        placeholder="Enter Password"
      />
      <br />
      <p>{passwordStrength}</p>
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
      


