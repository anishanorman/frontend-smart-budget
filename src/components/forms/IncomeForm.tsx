import React, { useState, useEffect } from "react";
import "./Forms.css";
import RadioButtons from "./RadioButtons";



export default function IncomeForm(props: any) {
  console.log(props)
  // initialize the state variables for the form data
  const [formData, setFormData] = useState({
    income_type: "",
    annual: "" ,
    month: "" ,
  });

  


  // initialize the state variable for the button useability
  const [valid, setValid] = useState(false)

  // handles the changes to the form inputs
  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const element: HTMLInputElement = event.target;
    const { name, value } = element;
   
  // Server refreshes after new input, this function prevents the deletion of said inputs  
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
    if (name === "month" && value === "on") {
      setFormData({
        ...formData,
        annual: "",
      });
    }
    // if the annual option is selected, delete the month value from the formData
    if (name === "annual" && value === "on") {
      setFormData({
        ...formData,
        month: "",
      });
    }
    
  }
  
  // handle form submission
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    console.log(`Form data: ${JSON.stringify(formData)}`);
    // refreshes form on submission 
    window.location.reload();
    // you can add additional code here to handle the form submission, such as sending the form data to a backend server
  }

  // UseEffect hook  that allows you to perform side effects in function components
  useEffect(() => {
    //set more form validations here if needed

    RadioButtons()
    if (formData.income_type !== "" && (formData.annual !== "" || formData.month !== "")) {
      setValid(true)
    } else {
      setValid(false)
    }
  }, [formData])
 



  // render the form
  return(
    <form id="incomeForm" onSubmit={handleSubmit}>
      <h2>Income Form</h2>
      <br />
      <h4> Type of Income</h4>
      <br />
      <input
        value={formData.income_type || ""}
        onChange={handleChange}
        name="income_type"
        type="text"
        placeholder="Enter Income Type"
      />
      <br />
      <br />
      <label> Annual</label>
      <input
        type="radio"
        id="annually"
        onChange={handleChange}
      />
      <label>Monthly</label>
      <input
        type="radio"
        id="monthly"
        onChange={handleChange}
      />
      <br />
      <br />
      <div>
        <label id = "annual">£
          <input
            id = "annual_input"
            value={formData.annual || ""}
            onChange={handleChange}
            type="number"
            name="annual"
            placeholder="Enter Annual Income"
          />
        </label>
        <label id = "month">£
         <input
            id = "month_input"
            value={formData.month || ""}
            onChange={handleChange}
            type="number"
            name="month"
            placeholder="Enter Monthly Income"
          />
        </label>
      </div>
      <br />
      <br/>
      <button disabled={!valid} type="submit">Submit</button>
    </form>
  )
}