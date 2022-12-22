import Container from "../components/design/Container";
import IncomeForm from "../components/forms/IncomeForm";
import Logo from "../components/design/Logo";
import Nav from "../components/design/Nav";
import {useImmer} from "use-immer"
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react"
import Btn from "../components/design/Btn";

export default function Income(props: any) {

    const navigate = useNavigate()

    useEffect(() => {
        if (!props.loggedIn) {
            navigate("/login")
        }
    }, [])

    const [formData, updateFormData] = useImmer({
        "income_type": "",
        "value": 0,
        "annual": 0,
        "month": 0,
    })
    const [selected, setSelected] = useState("month")

    function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
        const element: HTMLInputElement = event.target;
        const { name, value } = element
        if (value=="annual") {
            setSelected("annual")
            updateFormData(prev => {
                prev.month = +(prev.value/12).toFixed(2)
                prev.annual = +prev.value.toFixed(2)
            })
        } else if (value==="month") {
            setSelected("month")
            updateFormData(prev => {
                prev.month = +prev.value.toFixed(2)
                prev.annual = +(prev.value*12).toFixed(2)
            })
        } else if (name==="income_type") {
            updateFormData((prev) => ({
                ...prev,
                [name]: value
            }))
        } else {
            if (selected==="annual") {
                updateFormData(prev => {
                    prev.value = +Number(value).toFixed(2)
                    prev.month = +(Number(value)/12).toFixed(2)
                    prev.annual = +Number(value).toFixed(2)
                })
            } else {
                updateFormData(prev => {
                    prev.value = +Number(value).toFixed(2)
                    prev.month = +Number(value).toFixed(2)
                    prev.annual = +(Number(value)*12).toFixed(2)
                })
            }
        }
      }

      function handleSubmit() {
        props.updateBudget(prev => {
            prev.income.push({
                income_type: formData.income_type,
                annual: formData.annual,
                month: formData.month
            })
        })

        navigate("/edit")
      }

        return(
            <div className="App">
                <Logo />
                <div className="pageContent">
                    <Container header="New Income" content={<IncomeForm formData={formData} updateFormData={updateFormData} handleChange={handleChange} />}/>
                    <Btn content="Submit" to="/edit" className="orangeBtn" onClick={handleSubmit}/>
                </div>
                <Nav />                
            </div>
        )
}