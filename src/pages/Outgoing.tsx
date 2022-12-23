import Btn from "../components/design/Btn"
import Container from "../components/design/Container"
import OutgoingForm from "../components/forms/OutgoingForm"
import Logo from "../components/design/Logo"
import Nav from "../components/design/Nav"
import { useImmer } from "use-immer"
import { useNavigate } from "react-router-dom"
import { useEffect } from "react"

export default function Outgoing(props: any) {
    
    const navigate = useNavigate()

    useEffect(() => {
        if (!props.loggedIn) {
            navigate("/splash")
        }
    }, [])

    const [formData, updateFormData] = useImmer({
        item_type: "variable",
        name: "",
        value: 0
    })

    function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
        const element: HTMLInputElement = event.target;
        const { name, value } = element;
        updateFormData((prevFormData) => ({
          ...prevFormData,
          [name]: value,
        }));
      }

      function handleSubmit() {
        props.updateBudget(prev => {
            prev.budget_items_attributes.push(formData)
        })
        navigate("/edit")
      }

        return(
            <div className="App">
                <Logo />
                <div className="pageContent">
                    <Container header="New Outgoing" content={<OutgoingForm formData={formData} updateFormData={updateFormData} handleChange={handleChange} />}/>
                    <Btn content="Submit" to="/edit" className="orangeBtn" onClick={handleSubmit}/>
                </div>    
                <Nav />             
            </div>
        )
}