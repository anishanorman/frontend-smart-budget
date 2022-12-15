import React, { useState, useEffect } from "react"

export default function IncomeForm (props: any) {
  
  const [profile, setProfile] = useState({
    revenue_type:"",
    amount: ""
  })
 

  const [valid, setValid] = useState(false)

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const element: HTMLInputElement = event.target;
    const { name, value } = element;
    setProfile((prevProfile) => ({
      ...prevProfile,
      [name]: value
    }))
  }
  
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    var postReq = JSON.stringify({
      revenue_type: profile.revenue_type,
      amount: profile.amount
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
    if (profile.revenue_type !== "" && profile.amount !== "") {
      typeof profile.amount === 'number'? setValid(true) : setValid(false)
    } else {setValid(false)}
  }, [profile])
  
  return(
      <form id="regForm" onSubmit={handleSubmit}>
        <h2>Add Revenue</h2>
        <input
          value={profile.revenue_type || ""}
          onChange={handleChange}
          name="revenue_type"
          type="text"
          placeholder="Type of Revenue"
        />
        <br />
        <input
          value={profile.amount || ""}
          onChange={handleChange}
          type="number"
          name="amount"
          placeholder="Enter The Monthly Amount"
        />
        <button disabled={!valid} type="submit">Submit</button>
      </form>
  )
}
