import React from "react";
//import Particles from "react-particles-js";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
/*import Slideshow from "./components/Slideshow/Slideshow";*/
import "./App.css";

function App() {
  return (
    <Router>
      <div>
      {/* <Particles 
                canvasClassName="example"
                height="120px"
                width="300px"
                params={{
                    polygon: {
                        enable: true,
                        type: 'inside',
                        move: {
                            radius: 10
                        },
                        url: 'path/to/svg.svg'
                    }
                }} /> */}
        <Navbar />
        {/* <Route exact path="/" component={Home} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/reviews" component={Reviews} />
        <Route exact path="/feature" component={Feature} />
        <Route exact path="/account" component={Account} />
        <Route path="/about" component={About} /> */}
        <Header/>

        {/*<Slideshow/>*/}

        
        

        <Footer/>
      </div>
    </Router>
  );
}

export default App;
