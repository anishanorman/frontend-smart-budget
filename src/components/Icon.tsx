export default function Icon(props: any) {

    if (props.type==="a") {
        return(
            <a href={props.href} className={props.className}>
                <img src={props.src} alt={props.alt} />
            </a>
        )
    } else {
        return(
            <button type="button" onClick={props.onClick} className={props.className}>
                <img src={props.src} alt={props.alt} />
            </button>
        )
    }
}

        