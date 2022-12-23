import Btn from "../components/design/Btn";
import Container from "../components/design/Container";
import Logo from "../components/design/Logo";
import MakeTable from "../components/design/MakeTable";
import Nav from "../components/design/Nav";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";


const backEndUrl = "https://rails-orqd.onrender.com"

export default function Edit(props: any) {

    const navigate = useNavigate()

    useEffect(() => {
        if (!props.loggedIn) {
            navigate("/splash")
        }
    }, [])

    function handleDelete(type: any, indexToRemove: any) {
        if(type==="income") {
            props.updateBudget(prev => {
                return {
                    id: prev.id,
                    income: (prev.income.filter(
                        (item) => prev.income.indexOf(item) !== indexToRemove
                    )),
                    budget_items_attributes: prev.budget_items_attributes,
                    insights: prev.insights
                }
            })
        } else {
            props.updateBudget(prev => {
                return {
                    id: prev.id,
                    income: prev.income,
                    budget_items_attributes: (prev.budget_items_attributes.filter((item) => prev.budget_items_attributes.indexOf(item) !== indexToRemove)),
                    insights: prev.insights
                }
            })
        }   
    }

    function increase(indexToIncrease: any) {
        props.updateBudget(prev => {
            prev.budget_items_attributes[indexToIncrease].value+=10
        })
    }

    function decrease(indexToIncrease: any) {
        props.updateBudget(prev => {
            prev.budget_items_attributes[indexToIncrease].value-=10
        })
    }

    function toAllocate() {
        let total = 0
        props.budget.income.forEach((income) => {
            if (income.month) {
                total+=income.month
            } else {
                total+=income.annual
            }
            
        })
        props.budget.budget_items_attributes.forEach((item) => {
            total-=item.value
        })
        if (total>0) {
            return (`Leftover: £${+total.toFixed(2)}`)
        } else if (total<0) {
            return(`Over-budget: £${-total.toFixed(2)}`)
        } else {
            return(`Perfectly Allocated!`)
        }
    }

    return(
        <div className="App">
            <Logo />
            <div className="pageContent">
                <Container header="Income" content={<MakeTable handleDelete={handleDelete} data={props.budget.income} content="income" editable="true"/>}/>
                <Btn to="/income" className="add orangeBtn" content="Add +" />
                <Container header="Outgoings" toAllocate={toAllocate()} content={<MakeTable increase={increase} decrease={decrease} handleDelete={handleDelete} data={props.budget.budget_items_attributes} content="outgoings" editable="true"/>}/>
                <Btn to="/outgoing" className="add orangeBtn" content="Add +" />
            </div>
            <Nav save="false" edit="false" done="true" />
        </div>
    ) 
}