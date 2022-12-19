import React from "react"
import {useState} from "react"
const backEndUrl = "https://rails-orqd.onrender.com"
 




export default function OutgoingForm(props: any) {
    // This formData variable is a placeholder - it should be an array of budget_item objects when we send it to backend.
    // Each item in this array should look like this: {name: "Bills", value: 300, item_type: "fixed"}
    const [formData, setFormData] = useState([])

    // Post request to backend
    async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()

    //Structures the request body in a way the backend will like
    const requestBody:any = JSON.stringify({budget: {title: "", budget_items_attributes: formData}})

    let response: any = await fetch(`${backEndUrl}/budgets`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            //This header contains the token sent by backend on login request
            "Authorization": `Bearer: ${sessionStorage.getItem("auth_token")}`
          },
          body: requestBody 
    },
    )

    //The below variable will contain all of the outgoings submitted
    let budget_items: Array<Object> = response.budget_items
}
    return(<h1>This is the Fixed Outgoings form!</h1>)
}