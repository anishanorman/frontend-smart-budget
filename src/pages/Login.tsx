import LoginForm from "../components/forms/LoginForm";
import Logo from "../components/Logo";
import { useNavigate } from "react-router-dom"

export default function Login(props: any) {

    console.log("Login: " + props.loggedIn)
    if (props.loggedIn) {
        return(
            <div className="App">
                <Logo />
                <div className="pageContent">
                    <h1>You're already logged in!</h1>
                    <a href="/home">Click here to go home.</a>
                </div>
            </div>
        )
    } else {
        return(
            <div className="App">
                <Logo />
                <div className="pageContent">
                    <LoginForm />
                </div>                
            </div>
        )
    }

    
}