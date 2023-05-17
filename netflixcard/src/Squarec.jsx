import "./styles/card.css"
function Square(prop){
    return(
     <div>
            <img src={prop.img}className="sq"/> 
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