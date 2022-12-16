import Icon from "./Icon"
import editIcon from "../assets/edit-icon.png"
import deleteIcon from "../assets/delete-icon.png"
import leftArrow from "../assets/left-arrow.png"
import rightArrow from "../assets/right-arrow.png"
import leftArrowGrey from "../assets/left-arrow-grey.png"

export default function MakeTable(props: any) {
    var data=props.data

    if (!props.data || props.data.length<1) {
        return(
            <div className="table">
                <div className="row">
                    <p>(Empty)</p>
                </div>
            </div>
        )
    } else {

        if (props.editable==="true") {
            return (
                <div className="table">
                    {
                    data.map((item: any, index: any) => {
                        if(!item.type || item.type==="fixed") {
                            return(
                                <div className="fixedRow" key={index.toString()}>
                                    <h4>{item.name}</h4>
                                    <p>£{item.amount}pcm</p>
                                    <div className="icons">
                                        <Icon type="a" href="./income" className="editButton" src={editIcon} alt="edit" />
                                        <Icon type="button" onClick={() => props.handleDelete(props.content, index)}className="deleteButton" src={deleteIcon} alt="delete" />
                                    </div>
                                </div>
                            )
                        } else {
                            return(
                                <div className="variableRow" key={index.toString()}>
                                    <h4>{item.name}</h4>
                                    <div className="variableAmount">
                                        {item.amount > 0 && <Icon type="button" onClick={() => props.decrease(index)}className="decreaseButton" src={leftArrow} alt="decrease" />}
                                        {item.amount <= 0 && <Icon type="button" className="decreaseButton" src={leftArrowGrey} alt="disabledDecrease" />}
                                        <p>£{item.amount}pcm</p>
                                        <Icon type="button" onClick={() => props.increase(index)}className="increaseButton" src={rightArrow} alt="increase" />
                                    </div>
                                    <div className="icons">
                                        <Icon type="a" href="./income" className="editButton" src={editIcon} alt="edit" />
                                        <Icon type="button" onClick={() => props.handleDelete(props.content, index)}className="deleteButton" src={deleteIcon} alt="delete" />
                                    </div>
                                </div>
                            )
                        }
                    })
                    }
                </div>
            )
        } else {
            return(
                <div className="table">
                    {
                        data.map((item: any, index: any) => {
                            <div className="row">
                                <h4>{item.name}</h4>
                                <p>{item.amount}</p>
                            </div>
                        })
                    }
                </div>
            )
        }

        // return(
        //     <div className="table">
        //         {/* {
        //             data.map((item: any, index: any) => {
        //                 if(!item.type || item.type==="fixed") {
        //                     return(
        //                         <div className="fixedRow" key={index.toString()}>
        //                             <h4>{item.name}</h4>
        //                             <div className="fixedAmount">
        //                                 <br />
        //                                 <p>£{item.amount}pcm</p>
        //                                 {
        //                                     (props.editable==="true") && (
        //                                         <div className="icons">
                                                    // <Icon type="a" href="./income" className="editButton" src={editIcon} alt="edit" />
                                                    // <Icon type="button" onClick={() => props.handleDelete(props.content, index)}className="deleteButton" src={deleteIcon} alt="delete" />
        //                                         </div>
        //                                     )
        //                                 }
        //                             </div>
        //                         </div>
        //                     )
        //                 } else if (item.type==="variable") {
        //                     return(
        //                         <div className="variableRow" key={index.toString()}>
        //                             <h4>{item.name}</h4>
        //                             <div className="variableAmount">
                                        // <Icon type="button" onClick={() => props.decrease(index)}className="decreaseButton" src={leftArrow} alt="decrease" />
                                        // <p>£{item.amount}pcm</p>
                                        // <Icon type="button" onClick={() => props.increase(index)}className="increaseButton" src={rightArrow} alt="increase" />
        //                             </div>
        //                         </div>
        //                     ) 
        //                 }
                        
                        
        //             })
        //         } */}
        //     </div>
        // )
    }
}
