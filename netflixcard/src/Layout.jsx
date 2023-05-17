import {Link} from "react-router-dom"
function Layout(props){
    return(
        <>
          <div className="icon">
          <Link to={props.link}>  <img src= {props.ico}/></Link>
            </div>
        </>
    )
}
export default Layout