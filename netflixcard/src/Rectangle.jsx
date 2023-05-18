import "./styles/card.css"
import fav from "./images/favorites.png"
function Rectangle(prop){
    return(
     <div>
            <img src={prop.img}className="rect"/> 
            <div className="favs">
              <img src ={fav} />
            </div>
            <div className="p"> 
              <div className="para">
                <p>{prop.para1}</p>
                <p>{prop.para2}</p>
                <p>{prop.para3}</p>
                </div>
              <h4>{prop.hed}</h4>
              
            </div> 
          
     </div>
    )
}
export default Rectangle