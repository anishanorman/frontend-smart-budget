import LoginForm from "../components/forms/LoginForm";
import Logo from "../components/Logo";
import { useNavigate } from "react-router-dom"

export default function Login(props: any) {

        return(
            <div className="App">
                <Logo />
                <div className="pageContent">
                    <LoginForm updateBudget={props.updateBudget}/>
                </div>                
            </div>
        )
    }
