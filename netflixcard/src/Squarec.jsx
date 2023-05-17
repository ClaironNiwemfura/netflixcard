import "./styles/card.css"
import fav from "./images/favorites.png"
function Square(prop){
    return(
     <div className="square">
        <img src={prop.img}className="sq"/> 
        <div className="fav">
        <img src ={fav} />
        </div>
       <div className="pa"> 
        <div className="para">
        <p>{prop.para1}</p>
        <p>{prop.para2}</p>
        <p>{prop.para3}</p>
        </div>
        <h2>{prop.hed}</h2>

        </div> 
     </div>
    )
}
export default Square