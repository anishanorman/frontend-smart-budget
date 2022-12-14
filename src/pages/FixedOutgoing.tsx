import FixedOutgoingsForm from "../components/forms/OutgoingsForm"
import Logo from "../components/Logo"
import Nav from "../components/Nav"

export default function FixedOutgoings(props: any) {
    if (props.LoggedIn) {
        return(
            <div className="App">
                <Logo />
                <div className="pageContent">
                    <FixedOutgoingsForm />
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