import React, { useState, useEffect } from "react";

export default function RegisterForm(props: any) {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    mobile: "",
    password: "",
    city: "",
    county: "",
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
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    console.log(`Form data: ${JSON.stringify(formData)}`);

    // you can add additional code here to handle the form submission, such as sending the form data to a backend server
  }

  // function that determines the strength of the password 
  function checkPasswordStrength(password: string) {
    if (password.length < 8) {
      return "Password Strength: Weak";
    } else if (password.length >= 8 && password.length < 12) {
      return "Password Strength: Medium";
    } else {
      return "Password Strength: Strong";
    }
  }

  useEffect(() => {
    // Check password strength whenever password changes
    setPasswordStrength(checkPasswordStrength(formData.password));
  }, [formData.password]);

  // UseEffect hook  that allows you to perform side effects in function components
  useEffect(() => {
    // set more form validations here if needed

    const passwordStrength = checkPasswordStrength(formData.password);
    if (
      formData.username !== "" &&
      formData.email !== "" &&
      formData.mobile !== "" &&
      (formData.password !== "" && passwordStrength !== "Password Strength: Weak") &&
      formData.city !== "" &&
      formData.county !== "")
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
        value={formData.mobile || ""}
        onChange={handleChange}
        name="mobile"
        type="mobile"
        placeholder="Enter Mobile"
      />
      <br />
      <input
        value={formData.password || ""}
        onChange={handleChange}
        name="password"
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
      <br />
      <a href="/register">Not Registered?</a>
      <br />
      <button disabled={!valid} type="submit">Submit</button>
      </form>
  )
}
      


