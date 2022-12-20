import Btn from "../components/Btn"
import Container from "../components/Container"
import OutgoingForm from "../components/forms/OutgoingForm"
import Logo from "../components/Logo"
import Nav from "../components/Nav"
import { useImmer } from "use-immer"

export default function Outgoing(props: any) {

    const [formData, updateFormData] = useImmer({
        item_type: "variable",
        name: "",
        value: null
    })

    function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
        const element: HTMLInputElement = event.target;
        const { name, value } = element;
        updateFormData((prevFormData) => ({
          ...prevFormData,
          [name]: value,
        }));
        console.log(formData)
      }

      function handleSubmit() {
        console.log(formData)
      }


        return(
            <div className="App">
                <Logo />
                <div className="pageContent">
                    <Container header="New Outgoing" content={<OutgoingForm formData={formData}updateFormData={updateFormData} handleChange={handleChange} />}/>
                    <Btn content="Submit" sendTo="/edit" className="orangeBtn" onSubmit={handleSubmit}/>
                </div>    
                <Nav />             
            </div>
        )
}