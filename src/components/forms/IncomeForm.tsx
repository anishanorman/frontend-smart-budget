import React, { useState, useEffect } from "react";

export default function IncomeForm(props: any) {
  console.log(props)
  // initialize the state variables for the form data
  const [formData, setFormData] = useState({
    income_type: "",
    annual: "",
    month: "",
  });

  // initialize the state variable for the radio button selection
  const [selectedOption, setSelectedOption] = useState("");

  // handle changes to the form inputs
  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const element: HTMLInputElement = event.target;
    const { name, value } = element;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  }

  // handle changes to the radio button selection
  function handleOptionChange(event: React.ChangeEvent<HTMLInputElement>) {
    setSelectedOption(event.target.value);
  }

  // handle form submission
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    console.log(`Form data: ${JSON.stringify(formData)}`);
    console.log(`Selected option: ${selectedOption}`);
    // you can add additional code here to handle the form submission, such as sending the form data to a backend server
  }

  // render the form
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Revenue Type:
        <input
          value={formData.income_type || ""}
          onChange={handleChange}
          name="income_type"
          type="text"
          placeholder="Enter Revenue Type"
        />
      </label>
      <br />
      <label>
        <input
          type="radio"
          value="annual"
          checked={selectedOption === "annual"}
          onChange={handleOptionChange}
        />
        Yearly Amount:
        <input
          value={formData.annual || ""}
          onChange={handleChange}
          name="annual"
          type="number"
          placeholder="Enter Yearly Amount"
        />
      </label>
      <br />
      <label>
        <input
          type="radio"
          value="month"
          checked={selectedOption === "month"}
          onChange={handleOptionChange}
        />
        Monthly Amount:
        <input
          value={formData.month || ""}
          onChange={handleChange}
          name="month"
          type="number"
          placeholder="Enter Monthly Amount"
        />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
}