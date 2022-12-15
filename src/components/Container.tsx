export default function Container(props: any) {
    return(
        <div className="container">
            <header>
                <h3>{props.header}</h3>
            </header>
            {props.content}
        </div>
    )
    
}