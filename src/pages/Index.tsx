import Container from "../components/Container"
import Logo from "../components/Logo"
import MakeTable from "../components/MakeTable"
import Nav from "../components/Nav"
import { useNavigate } from "react-router-dom"
import {useEffect} from "react"

const backEndUrl = "https://rails-orqd.onrender.com"

//Get data from backend (mock for now)


var data: any

export default function Index(props: any) {

    const navigate = useNavigate()

    useEffect(() => {
        if (!props.loggedIn) {
            navigate("/login")
        }
    }, [])

    var budget = props.budget

    async function handleSave() {
        //incomes request
        const incomeReq:any = JSON.stringify({new_incomes: budget.income})

        let incomeRes: any = await fetch(`${backEndUrl}/incomes/`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                //This header contains the token sent by backend on login request
                "Authorization": `Bearer: ${sessionStorage.getItem("auth_token")}`
              },
              body: incomeReq
        },
        )
        incomeRes = await incomeRes.json()
        props.updateBudget(prev => {
            prev.income = incomeRes.incomes
        })

        //outgoings request
        const outgoingReq:any = JSON.stringify({budget: {title: "", budget_items_attributes: props.budget.budget_items_attributes}})
        let outgoingRes

        if (budget.id===0) {
            //new budget creation
            outgoingRes = await fetch(`${backEndUrl}/budgets/`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    //This header contains the token sent by backend on login request
                    "Authorization": `Bearer: ${sessionStorage.getItem("auth_token")}`
                  },
                  body: outgoingReq
            },
            )

        } else {
            //update budget
            outgoingRes = await fetch(`${backEndUrl}/budgets/${budget.id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                    //This header contains the token sent by backend on login request
                    "Authorization": `Bearer: ${sessionStorage.getItem("auth_token")}`
                  },
                  body: outgoingReq
            },
            )
        }
        outgoingRes = await outgoingRes.json()
          props.updateBudget(prev => {
            prev.budget_items_attributes = outgoingRes.budget_items
          })
          props.updateBudget(prev => {
            prev.id = outgoingRes.budget.id
          })
    }

        return(
            <div className="App">
                <Logo />
                <div className="pageContent">
                    <Container header="Income" content={<MakeTable data={budget.income} editable="false"/>}/>
                    <Container header="Outgoings" content={<MakeTable data={budget.budget_items_attributes} editable="false"/>}/>
                </div>
                <Nav save="true" edit="true" handleSave={handleSave}/>
            </div>
        )


}