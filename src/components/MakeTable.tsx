import Icon from "./Icon"
import editIcon from "../assets/edit-icon.png"
import deleteIcon from "../assets/delete-icon.png"

export default function MakeTable(props: any) {
    var data=props.data
    console.log(data)

    if (!props.data || props.data.length<1) {
        return(
            <div className="table">
                <div className="row">
                    <h4>(Empty)</h4>
                    <p>(Empty)</p>
                </div>
            </div>
        )
    } else {
        return(
            <div className="table">
                {
                    data.map((item: any, index: any) => {
                        return(
                            <div className="row" key={index.toString()}>
                                <h4>{item.name}</h4>
                                <p>£{item.amount}pcm</p>
                                {
                                    (props.editable==="true") && (
                                        <div className="icons">
                                            <Icon type="a" href="./income" className="editButton" src={editIcon} alt="edit" />
                                            <Icon type="button" onClick={() => props.handleDelete(props.content, index)}className="deleteButton" src={deleteIcon} alt="delete" />
                                        </div>
                                    )
                                }
                        </div>
                        )
                        
                    })
                }
            </div>
        )
    }

    

}
