import Btn from "../components/Btn";
import Container from "../components/Container";
import Logo from "../components/Logo";
import Nav from "../components/Nav";

export default function Home(props: any) {
    console.log("Home: " + props.loggedIn)
    if (props.loggedIn) {
        return(
            <div className="App">
                <Logo />
                <div className="pageContent">
                    <Container header="Income" items="income"/>
                    <Btn sendTo="/income" className="add" content="Add +" />
                    <Container header="Outgoings" items="budget_items"/>
                    <Btn sendTo="/outgoing" className="add" content="Add +" />
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