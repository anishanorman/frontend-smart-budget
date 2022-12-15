import Container from "../components/Container";
import IncomeForm from "../components/forms/IncomeForm";
import Logo from "../components/Logo";
import Nav from "../components/Nav";

export default function Income(props: any) {
        return(
            <div className="App">
                <Logo />
                <div className="pageContent">
                    <Container header="Income" content={<IncomeForm />}/>
                </div>
                <Nav />                
            </div>
        )
}