import React from "react";
import Banner from "../banner/banner";
import "./about.css"
function About(){
    return (
        <div className="container">
            <Banner />
            <p>
                Hey, I made this site to practice some basics front end and back end.
                I took inspiration from webrings and sites I found on them and decided to make something without any
                UI frameworks.
                <br/>
                Twitter: @PaggyTheClown <br/>
                Instagram Main: JohnnyboyKCB_ <br/>
                Instagram Secondary: Deansjunkdrawer <br/>
                Email:
            </p>
        </div>
    )
}

export default About;