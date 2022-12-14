export default function Btn(props: any) {
    return(
        <a className={props.className} href={props.sendTo}>{props.content}</a>
    )
}