import Container from "../components/Container"
import Logo from "../components/Logo"
import MakeTable from "../components/MakeTable"
import Nav from "../components/Nav"
import { mockData } from "../mockData"

export default function Index(props: any) {

        return(
            <div className="App">
                <Logo />
                <div className="pageContent">
                    <Container header="Income" content={<MakeTable data={mockData.income} editable="false"/>}/>
                    <Container header="Outgoings" content={<MakeTable data={mockData.budget_items} editable="false"/>}/>
                </div>
                <Nav />
            </div>
        )


}