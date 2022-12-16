import Container from "../components/Container"
import Logo from "../components/Logo"
import MakeTable from "../components/MakeTable"
import Nav from "../components/Nav"

export default function Index(props: any) {

        return(
            <div className="App">
                <Logo />
                <div className="pageContent">
                    <Container header="Income" content={<MakeTable editable="false"/>}/>
                    <Container header="Outgoings" content={<MakeTable editable="false"/>}/>
                </div>
                <Nav edit="true" />
            </div>
        )


}