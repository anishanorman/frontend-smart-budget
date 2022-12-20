import Container from "../components/Container"
import Logo from "../components/Logo"
import MakeTable from "../components/MakeTable"
import Nav from "../components/Nav"
import { useImmer } from "use-immer"

//Get data from backend (mock for now)


var data: any

export default function Index(props: any) {

    var budget = props.budget
    console.log(budget)

    //   async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    //     event.preventDefault()
    
    //     //Structures the request body in a way the backend will like
    //     const requestBody:any = JSON.stringify({budget: {title: "", budget_items_attributes: formData}})
    
    //     let response: any = await fetch(`${backEndUrl}/budgets`, {
    //         method: "POST",
    //         headers: {
    //             "Content-Type": "application/json",
    //             //This header contains the token sent by backend on login request
    //             "Authorization": `Bearer: ${sessionStorage.getItem("auth_token")}`
    //           },
    //           body: requestBody 
    //     },
    //     )
    
    //     //The below variable will contain all of the outgoings submitted
    //     let budget_items: Array<Object> = response.budget_items
    // }

        return(
            <div className="App">
                <Logo />
                <div className="pageContent">
                    <Container header="Income" content={<MakeTable data={budget.income} editable="false"/>}/>
                    <Container header="Outgoings" content={<MakeTable data={budget.budget_items_attributes} editable="false"/>}/>
                </div>
                <Nav edit="true" />
            </div>
        )


}