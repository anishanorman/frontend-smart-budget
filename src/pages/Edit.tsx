import Btn from "../components/Btn";
import Container from "../components/Container";
import Logo from "../components/Logo";
import MakeTable from "../components/MakeTable";
import Nav from "../components/Nav";
import { mockData } from "../mockData";
import { useState } from "react"

export default function Edit(props: any) {

    const [data, setData] = useState(mockData)

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

    return(
        <div className="App">
            <Logo />
            <div className="pageContent">
                <Container header="Income" content={<MakeTable handleDelete={handleDelete} data={data.income} content="income" editable="true"/>}/>
                <Btn sendTo="/income" className="add" content="Add +" />
                <Container header="Outgoings" content={<MakeTable handleDelete={handleDelete} data={data.budget_items} content="outgoings" editable="true"/>}/>
                <Btn sendTo="/outgoing" className="add" content="Add +" />
            </div>
            <Nav />
        </div>
    )
    
}