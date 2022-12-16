import homeButton from "../assets/home-button.png"
import editIcon from "../assets/edit-icon-white.png"
import Icon from "./Icon"
import saveButton from "../assets/save-button.png"

export default function Nav(props: any) {
    return(
        <div className="nav">
            {
                props.edit==="true" && (<Icon type="a" href="./edit" className="editButtonWhite" src={editIcon} alt="edit" />)
            }
            
            <a id="homeButton" href="/">
                <img id="filledLogo" src={homeButton} alt="Smart Budget App Logo"/>
            </a>
            {
                props.save==="true" && (<Icon type="button" onClick={props.handleSave} className="saveButton" src={saveButton} alt="save" />)
            }
            
        </div>
    )
}