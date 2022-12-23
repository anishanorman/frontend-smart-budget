import React, { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"

const backEndUrl = "https://rails-orqd.onrender.com"



export default function LoginForm(props: any) {

  const navigate = useNavigate()

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
    event.preventDefault()
    
    let response: any = await fetch(`${backEndUrl}/users/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData)
    })
    if (response.ok) {
      response = await response.json()
      console.log(response)
      // Saves jwt token to session storage - this will need to be sent for subsequent requests.
      sessionStorage.setItem("auth_token", response.token)
      props.setLoggedIn(true)
      
      
      
      
      //budgetItems - contains an array of each of the budget item objects and their budget_id
      let budgetItems: Array<Object> = response.budget_items
      let incomeItems: Array<Object> = response.incomes

      props.updateBudget(prev => {
        prev.budget_items_attributes = budgetItems
      })
      props.updateBudget(prev => {
        prev.income = incomeItems
      })
      props.updateBudget(prev => {
        prev.id = response.budget.id
      })
      props.updateBudget(prev => {
        prev.insights = response.insights
      })


      navigate("/")
    } else {
      alert("Incorrect username or password. Please try again.")
    }
    

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
        <h3>Please login to continue </h3>
        <input className="input"
          value={formData.username || ""}
          onChange={handleChange}
          name="username"
          type="text"
          placeholder="Enter Username"
        />
        <br />
        <br />
        <input className="input"
          value={formData.pw_hash || ""}
          onChange={handleChange}
          type="password"
          name="pw_hash"
          placeholder="Enter Password"
        />
        <br />
        <br />
        <a href="/register">New user?</a>
        <br/>
        <br/>
        <button disabled={!valid} className ="orangeBtn" id= "length" type="submit">Submit</button>
      </form>
  )
}