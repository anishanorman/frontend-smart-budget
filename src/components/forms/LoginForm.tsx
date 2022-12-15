import React, { useState, useEffect} from "react"

export default function LoginForm (props:any){
  const [valid, setValid] = useState(false)
  const [profile, setProfile] = useState({
        username: "",
        userPassword: "",
    })

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
          pw_hash: profile.userPassword
        })
        console.log(`Sent the following:${postReq}`)
        props.onSubmit(true)
    }
    //useEffect(() => {
        //set more form validations here if needed
        //if (profile.username !== "" && profile.userPassword !== "") 



    return (
        <form id="LogForm" onSubmit={handleSubmit}>
           <h2> Please login</h2>
            <input
                value={profile.username || ""}
                onChange={handleChange}
                name="Username"
                 type="text"
                placeholder="Enter Username"
            />
            <br />
            <input
                value={profile.userPassword || ""}
                onChange={handleChange}
                name="Password"
                 type="text"
                placeholder="Enter Password"
            />
          <button disabled={!valid} type="submit">Submit</button>
        </form>
      );
    

    
    
    
    
    
}
    
