import homeButton from "../assets/home-button.png"
import editIcon from "../assets/edit-icon-white.png"
import Icon from "./Icon"
import saveButton from "../assets/save-button.png"

export default function Nav(props: any) {
    return(
        <div className="nav">
            {
                props.edit==="true" && (<Icon type="a" to="./edit" className="editButtonWhite" src={editIcon} alt="edit" />)
            }

            <Icon type="a" to="/" className="homeButton" src={homeButton} alt="Smart Budget App Logo" />

            {
                props.save==="true" && (<Icon type="button" onClick={props.handleSave} className="saveButton" src={saveButton} alt="save" />)
            }
            
        </div>
    )
}