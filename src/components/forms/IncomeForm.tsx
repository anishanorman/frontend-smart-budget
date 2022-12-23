



export default function IncomeForm(props: any) {
  
  // initialize the state variable for the button useability
  // const [valid, setValid] = useState(false)

  // // handles the changes to the form inputs
  // function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
  //   const element: HTMLInputElement = event.target;
  //   const { name, value } = element;
   
  // // Server refreshes after new input, this function prevents the deletion of said inputs  
  //   setFormData((prevFormData) => ({
  //     ...prevFormData,
  //     [name]: value,
  //   }));
  //   if (name === "month" && value === "on") {
  //     setFormData({
  //       ...formData,
  //       annual: 0,
  //     });
  //   }
  //   // if the annual option is selected, delete the month value from the formData
  //   if (name === "annual" && value === "on") {
  //     setFormData({
  //       ...formData,
  //       month: 0,
  //     });
  //   }
    
  // }
  
  // // handle form submission
  // function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
  //   event.preventDefault();

  //   console.log(`Form data: ${JSON.stringify(formData)}`);
  //   // refreshes form on submission 
  //   // window.location.reload();
  //   // you can add additional code here to handle the form submission, such as sending the form data to a backend server
  // }

  // // UseEffect hook  that allows you to perform side effects in function components
  // // useEffect(() => {
  //   //set more form validations here if needed

  //   RadioButtons()
  //   if (formData.income_type !== "" && (formData.annual !== "" || formData.month !== "")) {
  //     setValid(true)
  //   } else {
  //     setValid(false)
  //   }
  // }, [formData])
 



  // render the form
  return(
    <form id="incomeForm">
      <h4>Name</h4>
      <input
        value={props.formData.income_type || ""}
        onChange={props.handleChange}
        name="income_type"
        type="text"
      />
      <h4>Amount</h4>
      <input
        value={props.formData.value || ""}
        onChange={props.handleChange}
        name="value"
        type="text"
      />
      <br />
      <input type="radio" value="month" name="period" onChange={props.handleChange} /> Per Month
      <input type="radio" value="annual" name="period" onChange={props.handleChange}/> Per Year
      <br />
    </form>
  )
}