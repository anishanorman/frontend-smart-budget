import React from "react"
import { useState } from "react"
const backEndUrl = "https://rails-orqd.onrender.com"

export default function OutgoingForm(props: any) {

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
                            placeholder="(Monthly)"
                        />
                    </div>
                    
            }
        </form>

    )
}