import React from "react";
import Banner from "../banner/banner";
import "./about.css"
function About(){
    return (
        <div className="container">
            <Banner />
            <div>
                <p>
                    Hey, I made this site to practice some basic front and back end things.
                    I took inspiration from webrings and simple sites I found on them and decided to make something without any
                    super overwhelming / styled UI.
                    <br/>
                </p>
                <div className='links'>
                    <p>
                        Find me here: <br/>
                        Twitter: <a href='https://twitter.com/paggytheclown'>@paggytheclown</a> <br/>
                        Instagram Main: <a href='https://www.instagram.com/johnnyboykcb_/'>@johnnyboykcb_</a>  <br/>
                        Instagram Secondary: <a href='https://www.instagram.com/deansjunkdrawer/'>@deansjunkdrawer</a> <br/>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default About;