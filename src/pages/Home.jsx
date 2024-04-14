import React from "react";

// comps imports
import Showcase from "../components/Showcase";
import Demand from "../components/Demand";
import Tour from "../components/Tour";
import Property from "../components/Property";
import Expert from "../components/Expert";
import Perfect from "../components/Perfect";

// assets imports
import hero from "../assets/images/hero.jpg"

const Home = () => {
    
    return (
        <div className="overflow-hidden">
            <div style={{
                backgroundImage:`url(${hero})`,
                backgroundSize:"cover",
                backgroundPosition:"top",
                height:"100vh"
            }}>
                <Showcase/>
            </div>
            <Demand/>
            <Tour/>
            <Property/>
            <Expert/>
            <Perfect/>
        </div>
    )
}

export default Home