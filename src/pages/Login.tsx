import LoginForm from "../components/forms/LoginForm";
import Logo from "../components/design/Logo";
import { useNavigate } from "react-router-dom"
import { useEffect } from "react";

export default function Login(props: any) {

    const navigate = useNavigate()

    useEffect(() => {
        if (!props.loggedIn) {
            navigate("/splash")
        }
        if (props.loggedIn) {
            navigate("/splash")
        }
    }, [])
    

        return(
            <div className="WelcomeForm">
                <Logo />
                <div className="pageContent">
                    <LoginForm updateBudget={props.updateBudget} setLoggedIn={props.setLoggedIn}/>
                </div>                
            </div>
        )
    }
