import React from "react";

import {Link} from "react-scroll";
// React Font Awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
//import Typed from "react-typed";
export const Navbar = () => {
    return (
<nav className="navbar navbar-expand-lg fixed-top">
    
        

    <div className="container">
        <div className="te">

        {/* <Typed
               className="typed-text"
               strings={["Nailed it "]}
               typeSpeed={300}
               backSpeed={500}
               cursorChar="!"
               loop
               /> */}
            <h1>Nailed it !</h1>
        </div>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <FontAwesomeIcon icon={faBars} style={{color:"black"}} />
        </button> 
  
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    
            <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
                <Link smooth={true} to="home" offset={-150} className="nav-link" href="#">Home <span className="sr-only">(current)</span></Link>
            </li>
            <li className="nav-item">
                <Link smooth={true} to="about" offset={-150} className="nav-link" href="#">Reviews</Link>
            </li>
            <li className="nav-item">
                <Link smooth={true} to="services" offset={-150} className="nav-link" href="#">Profile</Link>
            </li>
            <li className="nav-item">
                <Link smooth={true} to="resume" offset={-150} className="nav-link" href="#">Feature</Link>
            </li>
            <li className="nav-item">
                <Link smooth={true} to="portfolio" offset={-150} className="nav-link" href="#">About Us</Link>
            </li>
            <li className="nav-item">
                <Link smooth={true} to="contacts" offset={-150} className="nav-link" href="#">Contact</Link>
            </li>
        
            </ul>
        
            
        </div>

        
            
        
                

    </div>
        
 
  
</nav>
    )
}

export default Navbar;