import "./styles/card.css"
function Rectangle(prop){
    return(
     <div>
            <img src={prop.img}className="rect"/> 
            <div className="p"> 
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
export default Rectangle