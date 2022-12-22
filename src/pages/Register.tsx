import Logo from "../components/design/Logo";
import RegisterForm from "../components/forms/RegisterForm";
import {useNavigate} from "react-router-dom"
import { useEffect } from "react";


export default function Register(props: any) {

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
                <RegisterForm setLoggedIn={props.setLoggedIn}/>
            </div>
        </div>
    )
}
