import { Link } from "react-router-dom";

export default function Btn(props: any) {
    return(
        <Link to={props.to} className={props.className} onClick={props.onClick}>
            {props.content}
        </Link>
    )
}