import cross from "../../../assets/cross.png"
import tick from "../../../assets/tick.png"
import VerifyLoading from "../../design/VerifyLoading"
export default function VerifyUserAnime (){
  return(
    <div id = "verify_animation">
      <div id = "loading_animation">
        <VerifyLoading/>
      </div>
      <img id="cross_confirmed"className= "confirmation" src={cross} alt=""></img>
      <img id="tick_confirmed"className= "confirmation" src= {tick} alt=""></img>
    </div>
  )
}
  
