import Graph from "../components/Graph";
import Logo from "../components/Logo";
import Nav from "../components/Nav";
import ViewVariableOutgoings from "../components/ViewVariableOutgoings";

export default function Home(props: any) {
    if (props.LoggedIn) {
        return(
            <div>
                <Logo />
                <Graph />
                <ViewVariableOutgoings />
                <Nav />
            </div>
        )
    } else {
        return(
            <div>
                <Logo />
                <h1>You aren't logged in!</h1>
                <a href="/login">Click here to login.</a><br />
                <a href="/register">Click here to register.</a>
            </div>
        )
    }
    
}