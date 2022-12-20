import React, { useState, useEffect } from "react"
const backEndUrl = "https://rails-orqd.onrender.com"



export default function LoginForm(props: any) {
  // initialize the state variables for the form data
  const [formData, setFormData] = useState({
    username: "",
    pw_hash: "",
  })

  // initialize the state variable for the button useability
  const [valid, setValid] = useState(false)

  //handle changes to the form inputs
  // Server refreshes after new input, this function prevents the deletion of said inputs  
  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const element: HTMLInputElement = event.target;
    const { name, value } = element;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value
    }))
  }

  // handle form submission
  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    // let response: any = await fetch(`${backEndUrl}/users`, {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json"
    //   },
    //   body: JSON.stringify(formData)
    // })
    // response = await response.json()
    // sessionStorage.setItem("auth_token", response.token)
    // console.log(sessionStorage.getItem("auth_token"))
    // return response

  }

  // UseEffect hook  that allows you to perform side effects in function components
  useEffect(() => {
    //set more form validations here if needed
    if (formData.username !== "" && formData.pw_hash !== "") {
      setValid(true)
    } else {
      setValid(false)
    }
  }, [formData])
  
  return(
      <form id="loginForm" onSubmit={handleSubmit}>
        <h2>Login</h2>
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
          value={formData.pw_hash || ""}
          onChange={handleChange}
          type="password"
          name="pw_hash"
          placeholder="Enter Password"
        />
        <br />
        <br />
        <a href="/register">Not Registered?</a>
        <br />
        <br/>
        <button disabled={!valid} type="submit">Submit</button>
      </form>
  )
}