import LoginForm from "../components/forms/LoginForm";
import Logo from "../components/Logo";
import { useNavigate } from "react-router-dom"
import { useEffect } from "react";

export default function Login(props: any) {

    const navigate = useNavigate()

    useEffect(() => {
        if (props.loggedIn) {
            navigate("/")
        }
    }, [])
    

        return(
            <div className="App">
                <Logo />
                <div className="pageContent">
                    <LoginForm updateBudget={props.updateBudget}/>
                </div>                
            </div>
        )
    }
