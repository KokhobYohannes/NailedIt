import React from "react";
import Slideshow from "../Slideshow/Slideshow";
//import Typed from "react-typed";
import {Link} from "react-scroll";

const Header = () => {
    return (
       <div id="home" className="header-wraper" >
           <div className="main-info">
           <Slideshow/>
               
               {/* <Typed
               className="typed-text"
               strings={["Web Design", "Web Development", "Graphic Design", "Google Analytics", "Social Media Marketing"]}
               typeSpeed={20}
               backSpeed={60}
               loop
               /> */}
           </div>

       </div>


    )
}



export default Header;