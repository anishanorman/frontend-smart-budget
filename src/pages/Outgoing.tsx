import OutgoingForm from "../components/forms/OutgoingForm"
import Logo from "../components/Logo"
import Nav from "../components/Nav"

export default function Outgoing(props: any) {
        return(
            <div className="App">
                <Logo />
                <div className="pageContent">
                    <OutgoingForm />
                </div>    
                <Nav />             
            </div>
        )
}