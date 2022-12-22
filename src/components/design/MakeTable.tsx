import Icon from "./Icon"
import editIcon from "../../assets/edit-icon-white.png"
import deleteIcon from "../../assets/delete-icon.png"
import leftArrow from "../../assets/left-arrow.png"
import rightArrow from "../../assets/right-arrow.png"
import leftArrowGrey from "../../assets/left-arrow-grey.png"

export default function MakeTable(props: any) {
    var data=props.data

    if (!props.data || props.data.length<1) {
        //no items
        return(
            <div className="table">
                <div className="emptyRow">
                    <p>(Empty)</p>
                </div>
            </div>
        )
    } else {

        if (props.editable==="true") {
            //on edit page
            return (
                <div className="table">
                    {
                    data.map((item: any, index: any) => {
                        if(item.item_type==="fixed") {
                            //fixed outgoings
                            return(
                                <div className="fixedRow" key={index.toString()}>
                                    <h4>{item.name}</h4>
                                    <p>£{item.value}pcm</p>
                                    <div className="icons">
                                        <Icon type="button" onClick={() => props.handleDelete(props.content, index)}className="deleteButton" src={deleteIcon} alt="delete" />
                                    </div>
                                </div>
                            )
                        } else if (item.item_type==="variable") {
                            //variable outgoings
                            return(
                                <div className="variableRow" key={index.toString()}>
                                    <h4>{item.name}</h4>
                                    <div className="variablevalue">
                                        {item.value > 0 && <Icon type="button" onClick={() => props.decrease(index)}className="decreaseButton" src={leftArrow} alt="decrease" />}
                                        {item.value <= 0 && <Icon type="button" className="decreaseButton" src={leftArrowGrey} alt="disabledDecrease" />}
                                        <p>£{item.value}pcm</p>
                                        <Icon type="button" onClick={() => props.increase(index)}className="increaseButton" src={rightArrow} alt="increase" />
                                    </div>
                                    <div className="icons">
                                        <Icon type="button" onClick={() => props.handleDelete(props.content, index)}className="deleteButton" src={deleteIcon} alt="delete" />
                                    </div>
                                </div>
                            )
                        } else {
                            //income
                            return(
                                <div className="fixedRow" key={index.toString()}>
                                    <h4>{item.income_type}</h4> 
                                    <p>£{item.month}pcm</p>
                                    
                                    <div className="icons">
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
            //on index
            return(
                <div className="table">
                    {
                        data.map((item: any, index: any) => {
                            if(item.item_type) {
                                //Outgoings
                                return(
                                    <div className="row" key={index.toString()}>
                                        <h4>{item.name}</h4>
                                        <p>£{item.value}pcm</p>
                                    </div>
                                )
                            } else {
                                //income
                                return(
                                    <div className="row" key={index.toString()}>
                                        <h4>{item.income_type}</h4> 
                                        <p>£{item.month}pcm</p>
                                    </div>
                                )
                            }
                        })
                    }
                </div>
            )
        }
    }
}
