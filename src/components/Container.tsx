const mockData: any = {
    income: [{ type: "Salary", amount: "1800" }, { type: "Dividend", amount: "50" }],
    budget_items: [
        { type: "Fixed", name: "Rent", amount: "900" },
        { type: "Fixed", name: "Bills", amount: "200" },
        { type: "Variable", name: "Shopping"},
        { type: "Variable", name: "Coffee" }

    ]
}

export default function Container(props: any) {
    console.log(props.items)
    if (props.items==="income") {
        return(
            <div className="container">
                <header>
                    <h3>{props.header}</h3>
                </header>
                <div className="data">
                    {
                        mockData.income.map((item: any) => {
                            return(<div className="row">
                                <h4>{item.type}</h4>
                                <p>£{item.amount}pcm</p>
                            </div>)
                        })
                    }
                </div>
            </div>
        )
    } else if (props.items==="budget_items") {
        return(
            <div className="container">
                <header>
                    <h3>{props.header}</h3>
                </header>
                <div className="data">
                    {
                        mockData.budget_items.map((item: any) => {
                            if (item.type==="Variable") {
                                return(<div className="row">
                                    <h4>{item.name}</h4>
                                    <p>Variable</p>
                                </div>)
                            } else {
                                return(<div className="row">
                                    <h4>{item.name}</h4>
                                    <p>£{item.amount}pcm</p>
                                </div>)
                            }
                            
                        })
                    }
                </div>
            </div>
        )
    } else {
        return(
            <div></div>
        )
    }
    
}