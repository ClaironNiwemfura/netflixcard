import './App.css'
import './styles/card.css'
import Rectangle from './Rectangle.jsx'
import Square from './Squarec.jsx'
import Vertical from './Vertical.jsx'
import img1 from"./images/img1.jpg"
import img2 from"./images/img2.avif"
import {AiOutlineSearch } from "react-icons/ai";

function App() {
  
  return (
    <div className="body">
      <div className='vh'>
       <Vertical/>
      </div>
      <div className='right'>
        <div className='search'>
          <div>
           <AiOutlineSearch className='icons'/>
          </div>
          <div>
           <input type='search'></input>
         </div>
        </div>
        <h2 className='hh2'>Trending</h2>
        <div className='parent'>
          <div>
            <Rectangle
            img={img1}
            para1={"2019"}
            para2={".movie"}
            para3={".pg"}
            hed={"Beyond Earth"}/>
          </div>
          <div>
            <Rectangle
            img={img2}
            para1={"2019"}
            para2={".movie"}
            para3={".pg"}
            hed={"Beyond Earth"}/>
          </div>
          <div>
            <Rectangle
            img={img1}
            para1={"2019"}
            para2={".movie"}
            para3={".pg"}
            hed={"Beyond Earth"}/>
          </div>
       </div>
      <h2 className='hh1'>Recommended for you</h2>
      <div className='par2'>
        <Square
        img={img1}
        para1={"2019"}
        para2={".movie"}
        para3={".pg"}
        hed={"Beyond Earth"}/>
        <Square
        img={img1}
        para1={"2019"}
        para2={".movie"}
        para3={".pg"}
        hed={"Beyond Earth"}/>
         <Square
        img={img1}
        para1={"2019"}
        para2={".movie"}
        para3={".pg"}
        hed={"Beyond Earth"}/>
         <Square
        img={img1}
        para1={"2019"}
        para2={".movie"}
        para3={".pg"}
        hed={"Beyond Earth"}/>
        <Square
        img={img1}
        para1={"2019"}
        para2={".movie"}
        para3={".pg"}
        hed={"Beyond Earth"}/>
        <Square
        img={img1}
        para1={"2019"}
        para2={".movie"}
        para3={".pg"}
        hed={"Beyond Earth"}/>
      </div>
    </div>
    </div>
  )
}

export default App
