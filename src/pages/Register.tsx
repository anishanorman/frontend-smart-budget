import Logo from "../components/Logo";
import RegisterForm from "../components/forms/RegisterForm";

export default function Register(props: any) {

    function logIn() {
        props.setLoggedIn(true)
        console.log("Register: " + props.loggedIn)
    }

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
                    <RegisterForm onSubmit={logIn}/>
                </div>
            </div>
        )
    }
}