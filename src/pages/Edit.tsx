import Btn from "../components/Btn";
import Container from "../components/Container";
import Logo from "../components/Logo";
import MakeTable from "../components/MakeTable";
import Nav from "../components/Nav";
import { useNavigate } from "react-router-dom"
import { useImmer } from "use-immer"

const backEndUrl = "https://rails-orqd.onrender.com"

export default function Edit(props: any) {

    const navigate = useNavigate()

    const [data, updateData] = useImmer(props.budget)
    console.log(data.id)

    function handleDelete(type: any, indexToRemove: any) {
        if(type==="income") {
            updateData(prev => {
                return {
                    id: prev.id,
                    income: (prev.income.filter(
                        (item) => prev.income.indexOf(item) !== indexToRemove
                    )),
                    budget_items_attributes: prev.budget_items_attributes
                }
            })
        } else {
            updateData(prev => {
                return {
                    id: prev.id,
                    income: prev.income,
                    budget_items_attributes: (prev.budget_items_attributes.filter((item) => prev.budget_items_attributes.indexOf(item) !== indexToRemove))
                }
            })
        }   
    }

    function increase(indexToIncrease: any) {
        updateData(prev => {
            prev.budget_items_attributes[indexToIncrease].value+=10
        })
    }

    function decrease(indexToIncrease: any) {
        updateData(prev => {
            prev.budget_items_attributes[indexToIncrease].value-=10
        })
    }

    async function handleSave() {
        //income request
        const incomeReq:any = JSON.stringify({new_incomes: data.income})
        console.log("Income:")
        console.log(incomeReq)

        let incomeRes: any = await fetch(`${backEndUrl}/incomes/`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                //This header contains the token sent by backend on login request
                "Authorization": `Bearer: ${sessionStorage.getItem("auth_token")}`
              },
              body: incomeReq
        },
        )
        incomeRes = await incomeRes.json()
        console.log(incomeRes)
        props.updateBudget(prev => {
            prev.income = incomeRes.incomes
        })

        //outgoings request
        const outgoingReq:any = JSON.stringify({budget: {title: "", budget_items_attributes: data.budget_items_attributes}})
        console.log("Outgoing:")
        console.log(outgoingReq)

        let outgoingRes: any = await fetch(`${backEndUrl}/budgets/${data.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                //This header contains the token sent by backend on login request
                "Authorization": `Bearer: ${sessionStorage.getItem("auth_token")}`
              },
              body: outgoingReq
        },
        )
        outgoingRes = await outgoingRes.json()
        console.log(outgoingRes)
          props.updateBudget(prev => {
            prev.budget_items_attributes = outgoingRes.budget_items_attributes
          })
          props.updateBudget(prev => {
            prev.id = outgoingRes.budget.id
          })

        navigate("/")
    }

    function toAllocate() {
        let total = 0
        data.income.forEach((income) => {
            if (income.month) {
                total+=income.month
            } else {
                total+=income.annual
            }
            
        })
        data.budget_items_attributes.forEach((item) => {
            total-=item.value
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
                <Btn to="/income" className="add" content="Add +" />
                <Container header="Outgoings" toAllocate={toAllocate()} content={<MakeTable increase={increase} decrease={decrease} handleDelete={handleDelete} data={data.budget_items_attributes} content="outgoings" editable="true"/>}/>
                <Btn to="/outgoing" className="add" content="Add +" />
            </div>
            <Nav save="true" edit="false" handleSave={handleSave}/>
        </div>
    ) 
}