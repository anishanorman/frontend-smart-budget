import React, { useState, useEffect } from "react"

export default function LoginForm(props: any) {
  // initialize the state variables for the form data
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  })

  // initialize the state variable for the button useability
  const [valid, setValid] = useState(false)

  //handle changes to the form inputs
  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const element: HTMLInputElement = event.target;
    const { name, value } = element;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value
    }))
  }

  // handle form submission
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    console.log(`Form data: ${JSON.stringify(formData)}`);

    // you can add additional code here to handle the form submission, such as sending the form data to a backend server
  }

  // UseEffect hook  that allows you to perform side effects in function components
  useEffect(() => {
    //set more form validations here if needed
    if (formData.username !== "" && formData.password !== "") {
      setValid(true)
    } else {
      setValid(false)
    }
  }, [formData])
  
  return(
      <form id="loginForm" onSubmit={handleSubmit}>
        <h2>Login</h2>
        <input
          value={formData.username || ""}
          onChange={handleChange}
          name="username"
          type="text"
          placeholder="Enter Username"
        />
        <br />
        <input
          value={formData.password || ""}
          onChange={handleChange}
          type="password"
          name="password"
          placeholder="Enter Password"
        />
        <br />
        <a href="/register">Not Registered?</a>
        <br />
        <button disabled={!valid} type="submit">Submit</button>
      </form>
  )
}