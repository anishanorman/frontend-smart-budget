import {Link} from "react-router-dom"

export default function Icon(props: any) {

    if (props.type==="a") {
        return(
            <Link to={props.to} type={props.content}className={props.className}>
                <img src={props.src} alt={props.alt} />
            </Link>
        )
    } else {
        return(
            <button type="button" onClick={props.onClick} className={props.className}>
                <img src={props.src} alt={props.alt} />
            </button>
        )
    }
}

        