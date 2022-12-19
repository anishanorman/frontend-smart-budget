import Btn from "../components/Btn";
import Container from "../components/Container";
import Logo from "../components/Logo";
import MakeTable from "../components/MakeTable";
import Nav from "../components/Nav";
import { useNavigate } from "react-router-dom"
import { useImmer } from "use-immer"

export default function Edit(props: any) {

    const [data, updateData] = useImmer({
        "income": [
            { "income_type": "Salary", "annual": 30000, "month": 1800}
            // ,{ "id": 1, "income_type": "Dividends", "value": 50}
        ],
        "budget_items_attributes": [
            { "item_type": "fixed", "name": "Rent", "value": 900 },
            { "item_type": "fixed", "name": "Bills", "value": 200 },
            { "item_type": "variable", "name": "Shopping", "value": 200 },
            { "item_type": "variable", "name": "Coffee", "value": 30 }
        ]
})
    console.log(data)

    const navigate = useNavigate()

    function handleDelete(type: any, indexToRemove: any) {
        if(type==="income") {
            updateData(prev => {
                return {
                    income: (prev.income.filter(
                        (item) => prev.income.indexOf(item) !== indexToRemove
                    )),
                    budget_items_attributes: prev.budget_items_attributes
                }
            })
        } else {
            updateData(prev => {
                return {
                    income: prev.income,
                    budget_items_attributes: (prev.budget_items_attributes.filter((item) => prev.budget_items_attributes.indexOf(item) !== indexToRemove))
                }
            })
        }   
    }

    function increase(indexToIncrease: any) {
        updateData(prev => {
            prev.budget_items_attributes[indexToIncrease].value+=10
        })
    }

    function decrease(indexToIncrease: any) {
        updateData(prev => {
            prev.budget_items_attributes[indexToIncrease].value-=10
        })
    }

    function handleSave() {
        // post req to backend using data
        // 
        // 
        // 
        navigate("/")
    }

    function toAllocate() {
        let total = 0
        data.income.forEach((income) => {
            if (income.month) {
                total+=income.month
            } else {
                total+=income.annual
            }
            
        })
        data.budget_items_attributes.forEach((item) => {
            total-=item.value
        })
        if (total>0) {
            return (`Left to allocate: £${total}`)
        } else if (total<0) {
            return(`Over-budget by £${-total}`)
        } else {
            return(`Perfect!`)
        }
    }

    return(
        <div className="App">
            <Logo />
            <div className="pageContent">
                <Container header="Income" content={<MakeTable handleDelete={handleDelete} data={data.income} content="income" editable="true"/>}/>
                <Btn sendTo="/income" className="add" content="Add +" />
                <Container header="Outgoings" toAllocate={toAllocate()} content={<MakeTable increase={increase} decrease={decrease} handleDelete={handleDelete} data={data.budget_items_attributes} content="outgoings" editable="true"/>}/>
                <Btn sendTo="/outgoing" className="add" content="Add +" />
            </div>
            <Nav save="true" edit="false" handleSave={handleSave}/>
        </div>
    )
    
}