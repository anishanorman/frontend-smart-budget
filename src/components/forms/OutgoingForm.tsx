import React from "react"
import { useState } from "react"
const backEndUrl = "https://rails-orqd.onrender.com"

export default function OutgoingForm(props: any) {

    // This formData variable is a placeholder - it should be an array of budget_item objects when we send it to backend.
    // Each item in this array should look like this: {name: "Bills", value: 300, item_type: "fixed"}
    const [formData, setFormData] = useState([])

    return(
        
        <form>
            <div>
                <p>Outgoing Type*</p>
                <input type="radio" value="fixed" name="item_type" onChange={props.handleChange}/> Fixed
                <input type="radio" value="variable" name="item_type" onChange={props.handleChange}/> Variable
            </div>
            <label htmlFor="name">Name*</label>
            <input
                value={props.formData.name || ""}
                onChange={props.handleChange}
                name="name"
                type="text"
            />
            {
                props.formData.item_type==="fixed" && 
                    <div>
                        <label htmlFor="name">Amount*</label>
                        <input
                            value={props.formData.value || ""}
                            onChange={props.handleChange}
                            name="value"
                            type="text"
                            placeholder="£"
                        />
                        <br />
                        <input type="radio" value="month" name="period" onChange={props.handleChange} /> Per Month
                        <input type="radio" value="annual" name="period" onChange={props.handleChange}/> Per Year
                    </div>
                    
            }
        </form>

    )
}