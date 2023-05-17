import "./styles/card.css"
import Layout from "./Layout.jsx"
import ico1 from "./images/favorites.png"  
import ico2 from "./images/retro.png"  
import ico3 from "./images/cal.png"
import ico4 from "./images/foursquare.png"
import ico5 from "./images/movie.png"
import ico6 from "./images/wish.jpeg"
function Vertical(){
    return(
     <div className="bod">
         <div className="ico">
         <Layout
           ico ={ico3} link='/'/>
         </div>  
         <div className="icob"> 
         <Layout
            ico ={ico4} link='/Four'/>
             <Layout
           ico ={ico5} link='/Movie'/>
            <Layout
            ico ={ico2} link='/Retro'/>
         <Layout
           ico ={ico1} link='/Favorites'/>
         
          </div>
         <div className="prof">
         
         </div>
     </div>
    )
}
export default Vertical