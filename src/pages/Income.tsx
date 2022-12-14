import IncomeForm from "../components/forms/IncomeForm";
import Logo from "../components/Logo";
import Nav from "../components/Nav";

export default function Income(props: any) {
    if (props.LoggedIn) {
        return(
            <div className="App">
                <Logo />
                <div className="pageContent">
                    <IncomeForm />
                </div>
                <Nav />                
            </div>
        )
    } else {
        return(
            <div className="App">
                <Logo />
                <div className="pageContent">
                <h1>You aren't logged in!</h1>
                <a href="/login">Click here to login.</a><br />
                <a href="/register">Click here to register.</a>
                </div>  
            </div>
        )
    }
}