import './App.css'
import './styles/card.css'
import Rectangle from './Rectangle.jsx'
import Square from './Squarec.jsx'
import Vertical from './Vertical.jsx'
import img1 from"./images/img1.jpg"
import img2 from"./images/img2.avif"
import {AiOutlineSearch } from "react-icons/ai";
import img3 from "./images/aladdin.jpeg"
import img4 from "./images/avatar.jpeg"
import img5 from "./images/onward.jpg"
import img6 from "./images/strangew.jpeg"
import img7 from "./images/luca.webp"
import img8 from "./images/wish.jpeg"
import img9 from "./images/inthe.webp"
import img0 from "./images/soul.jpeg"
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
           <input type='search' placeholder='search for movies or tv series'></input>
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
            hed={"Little mermaid"}/>
          </div>
          <div>
            <Rectangle
            img={img3}
            para1={"2019"}
            para2={".movie"}
            para3={".pg"}
            hed={"Aladdin"}/>
          </div>
       </div>
      <h2 className='hh1'>Recommended for you</h2>
      <div className='par2'>
        <Square
        img={img9}
        para1={"2019"}
        para2={".movie"}
        para3={".pg"}
        hed={"in the frame"}/>
        <Square
        img={img6}
        para1={"2019"}
        para2={".movie"}
        para3={".pg"}
        hed={"Beyond Earth"}/>
         <Square
        img={img7}
        para1={"2019"}
        para2={".movie"}
        para3={".pg"}
        hed={"luca"}/>
         <Square
        img={img0}
        para1={"2019"}
        para2={".movie"}
        para3={".pg"}
        hed={"soul"}/>
         <Square
        img={img8}
        para1={"2019"}
        para2={".movie"}
        para3={".pg"}
        hed={"wish"}/>
         <Square
        img={img5}
        para1={"2019"}
        para2={".movie"}
        para3={".pg"}
        hed={"onward"}/>
        <Square
        img={img6}
        para1={"2019"}
        para2={".movie"}
        para3={".pg"}
        hed={"strange world"}/>
        <Square
        img={img4}
        para1={"2019"}
        para2={".movie"}
        para3={".pg"}
        hed={"Avatar"}/>
         <Square
        img={img6}
        para1={"2019"}
        para2={".movie"}
        para3={".pg"}
        hed={"Beyond Earth"}/>
         <Square
        img={img7}
        para1={"2019"}
        para2={".movie"}
        para3={".pg"}
        hed={"luca"}/>
      </div>
    </div>
    </div>
  )
}

export default App
