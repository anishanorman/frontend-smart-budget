import Logo from "../components/design/Logo";
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
