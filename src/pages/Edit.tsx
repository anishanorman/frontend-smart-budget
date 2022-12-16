import Btn from "../components/Btn";
import Container from "../components/Container";
import Logo from "../components/Logo";
import MakeTable from "../components/MakeTable";
import Nav from "../components/Nav";
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { isTemplateExpression } from "typescript";

export default function Edit(props: any) {

    const [data, setData] = useState({
        "income": [{ "id": 0, "name": "Salary", "amount": 1800 }, { "id": 1, "name": "Dividends", "amount": 50}],
        "budget_items": [
            { "id": 0, "type": "fixed", "name": "Rent", "amount": 900 },
            { "id": 1, "type": "fixed", "name": "Bills", "amount": 200 },
            { "id": 2, "type": "variable", "name": "Shopping", "amount": 200 },
            { "id": 3, "type": "variable", "name": "Coffee", "amount": 30 }
        ]
})

    const navigate = useNavigate()

    function handleDelete(type: any, indexToRemove: any) {
        if(type==="income") {
            setData(prev => {
                return {
                    income: (prev.income.filter(
                        (item) => prev.income.indexOf(item) !== indexToRemove
                    )),
                    budget_items: prev.budget_items
                }
            })
        } else {
            setData(prev => {
                return {
                    income: prev.income,
                    budget_items: (prev.budget_items.filter((item) => prev.budget_items.indexOf(item) !== indexToRemove))
                }
            })
        }   

    }

    function handleSave() {
        // post req to backend using data
        // 
        // 
        // 
        navigate("/")
        console.log(data)

    }

    function toAllocate() {
        let total = 0
        data.income.forEach((income) => {
            total+=income.amount
        })
        data.budget_items.forEach((item) => {
            total-=item.amount
        })
        if (total>0) {
            return (`Left to allocate: £${total}`)
        } else if (total<0) {
            return(`Over-budget by £${-total}`)
        } else {
            return(`Perfect!`)
        }
        
    }

    return(
        <div className="App">
            <Logo />
            <div className="pageContent">
                <Container header="Income" content={<MakeTable handleDelete={handleDelete} data={data.income} content="income" editable="true"/>}/>
                <Btn sendTo="/income" className="add" content="Add +" />
                <Container header="Outgoings" toAllocate={toAllocate()} content={<MakeTable handleDelete={handleDelete} data={data.budget_items} content="outgoings" editable="true"/>}/>
                <Btn sendTo="/outgoing" className="add" content="Add +" />
            </div>
            <Nav save="true" edit="false" handleSave={handleSave}/>
        </div>
    )
    
}