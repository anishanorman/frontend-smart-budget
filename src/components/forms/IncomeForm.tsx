import React, { useState, useEffect } from "react"

export default function IncomeForm(props: any) {

  const [revenue, setRevenue] = useState({
    revenue_type:"",
    amount: ""
   
  })

  const [valid, setValid] = useState(false)

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const element: HTMLInputElement = event.target;
    const { name, value } = element;
    setRevenue((prevRevenue) => ({
      ...prevRevenue,
      [name]: value
    }))
  }
  
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    var postReq = JSON.stringify({
      revenue: revenue.revenue_type,
      amount: revenue.amount
    })
    // uncomment when hooking up to backend
    // await fetch("/users", {
    //   method: "POST",
    //   body: postReq,
    //   headers: {
    //     'Content-Type': 'application/json'
    //   }
    // })
    console.log(`Sent the following:
    
    ${postReq}`)
    props.onSubmit(true)
  }

  useEffect(() => {
    //set more form validations here if needed
    if (revenue.revenue_type !== "" && revenue.amount !== "") {
      typeof revenue.amount === 'number'? setValid(true) : setValid(false)
    } else {setValid(false)}
  }, [revenue])
  
  return(
      <form id="regForm" onSubmit={handleSubmit}>
        <h2> Addd revenue type </h2>
        <input
          value={revenue.revenue_type || ""}
          onChange={handleChange}
          name="Revenue Type"
          type="text"
          placeholder="Revenue Type"
        />
        <br />
        <input
          value={revenue.amount || ""}
          onChange={handleChange}
          name= "Monthly Amount"
          type="number"
          placeholder="Monthly Amount"
        />
        <button disabled={!valid} type="submit">Submit</button>
      </form>
  )
  }
