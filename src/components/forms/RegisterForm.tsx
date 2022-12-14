import React, { useState, useEffect } from "react"

export default function RegisterForm(props: any) {

  const [profile, setProfile] = useState({
    username: "",
    email: "",
    city: "",
    createPassword: "",
    repeatPassword: "",
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
      username: profile.username,
      email: profile.email,
      city: profile.city,
      pw_hash: profile.createPassword
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
    if (profile.username !== "" && profile.email !== "" && profile.city !== "" && profile.createPassword !== "" && profile.repeatPassword !== "") {
      profile.createPassword === profile.repeatPassword ? setValid(true) : setValid(false)
    } else {setValid(false)}
  }, [profile])
  
  return(
      <form id="regForm" onSubmit={handleSubmit}>
        <h2>Create new account</h2>
        <input
          value={profile.username || ""}
          onChange={handleChange}
          name="username"
          type="text"
          placeholder="Username*"
        />
        <input
          value={profile.email || ""}
          onChange={handleChange}
          type="text"
          name="email"
          placeholder="Email Address*"
        />
        <input
          value={profile.city || ""}
          onChange={handleChange}
          type="text"
          name="city"
          placeholder="City*"
        />
        <br />
        <input
          value={profile.createPassword || ""}
          onChange={handleChange}
          type="password"
          name="createPassword"
          placeholder="Create Password*"
        />
        <input
          value={profile.repeatPassword || ""}
          onChange={handleChange}
          type="password"
          name="repeatPassword"
          placeholder="Repeat Password*"
        />
        <a href="/login">Already Registered?</a>
        <button disabled={!valid} type="submit">Submit</button>
      </form>
  )
  }