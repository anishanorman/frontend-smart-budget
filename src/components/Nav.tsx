import homeButton from "../assets/home-button.png"

export default function Nav() {
    return(
        <div className="nav">
            <a id="homeButton" href="/">
                <img id="filledLogo" src={homeButton} alt="Smart Budget App Logo"/>
            </a>
        </div>
    )
}