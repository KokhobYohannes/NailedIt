
import React from "react";
import Projects from "./Projects";
import cardInfo from "./cardInfo";

const Portfolio = () => {
   
    return (
    
        <div className="container-fluid containerColor">
            <div className="row">
                <div className="marginBottomCol">
                    <div className="card-transparent">
                        <div className="card-body mt-5">
                            <h2 className="card-title text-center text-white myBottomBorder1">Features</h2>
                            <br />
                            
                            <div className="row row-cols-1 rows-cols-md-3">
                                    {cardInfo.map(result => (
                                        <Projects 
                                            id = {result.id}
                                            name={result.name}
                                            image = {result.image}
                                            title = {result.title}
                                            description = {result.description}
                                            deployed = {result.deployed}
                                            github = {result.github}
                                        />
                                    ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}



export default Portfolio;