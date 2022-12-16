import React, { useState, useEffect} from "react"

export default function LoginForm (props: any) {
  
  const [profile, setProfile] = useState({
    username: "",
    password: "",
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
      pw_hash: profile.password
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

  // useEffect(() => {
  //   //set more form validations here if needed
  // }, [profile])
  
  return(
      <form id="logForm" onSubmit={handleSubmit}>
        <h2>Please Login</h2>
        <input
          value={profile.username || ""}
          onChange={handleChange}
          name="username"
          type="text"
          placeholder="Username"
        />
        <br />
        <input
          value={profile.password || ""}
          onChange={handleChange}
          type="password"
          name="password"
          placeholder="Create Password"
        />
        <button disabled={!valid} type="submit">Submit</button>
      </form>
  )
}
