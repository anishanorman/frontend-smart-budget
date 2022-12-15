import Logo from "../components/Logo";
import RegisterForm from "../components/forms/RegisterForm";

export default function Register(props: any) {

    return(
        <div className="App">
            <Logo />
            <div className="pageContent">
                <RegisterForm />
            </div>
        </div>
    )
}
