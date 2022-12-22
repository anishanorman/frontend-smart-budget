export default function SmartInsights(props: any) {
    if (!props.data) {
        return(
            <div>Nothing here yet - save a budget to see some budgeting tips!</div>
        )
    } else {
        return(
        <ul>
            {
                props.data.map((insight: any, index: number) => {
                    return(<li key={index}>{insight}</li>)
                })
            }
        </ul>
        )
    }
}