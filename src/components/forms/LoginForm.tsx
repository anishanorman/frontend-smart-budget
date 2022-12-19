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
    let response: any = await fetch(`${backEndUrl}/users/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData)
    })
    response = await response.json()
    // Saves jwt token to session storage - this will need to be sent for subsequent requests.
    sessionStorage.setItem("auth_token", response.token)
    
    //userInformation - contains information like username, email, address, user id etc
    let userInformation: Object = response.user

    
    //budgetItems - contains an array of each of the budget item objects and their budget_id
    let budgetItems: Array<Object> = response.budget_items

        /* 
        This is what a single budget_item object looks like: 
     {
            "id": 17,
            "name": "Bills",
            "value": 3020.0,
            "budget_id": 7,
            "created_at": "2022-12-16T10:44:22.685Z",
            "updated_at": "2022-12-16T10:44:22.685Z",
            "item_type": "fixed"
        }
    */
    return response

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