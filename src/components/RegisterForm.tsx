import React, { useState } from "react"

export default function RegisterForm() {
    const [profile, setProfile] = useState({
      username: "",
      email: "",
      city: "",
      createPassword: "",
      repeatPassword: "",
    });
  
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const element: HTMLInputElement = event.target
      const { name, value } = element
      setProfile((prevProfile) => ({
        ...prevProfile,
        [name]: value
      }));
  
    };
  
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault()
      if (profile.createPassword!==profile.repeatPassword) {
        console.log("Passwords don't match")
        return
      }
      alert(JSON.stringify({
        username: profile.username,
        email: profile.email,
        city: profile.city,
        pw_hash: profile.createPassword
      }))
    }
  
    return (
      <form onSubmit={handleSubmit}>
        <h2>Create new account</h2>
        <input
          value={profile.username}
          onChange={handleChange}
          name="username"
          type="text"
          placeholder="Username*"
        />
        <input
          value={profile.email}
           onChange={handleChange}
          type="text"
          name="email"
          placeholder="Email Address*"
        />
        <input
          value={profile.city}
           onChange={handleChange}
          type="text"
          name="city"
          placeholder="City*"
        />
        <input
          value={profile.createPassword}
           onChange={handleChange}
          type="password"
          name="createPassword"
          placeholder="Create Password*"
        />
        <input
          value={profile.repeatPassword}
           onChange={handleChange}
          type="password"
          name="repeatPassword"
          placeholder="Repeat Password*"
        />
        <a>Already Registered?</a>
        <button type="submit">Submit</button>
      </form>
      
    );
  }