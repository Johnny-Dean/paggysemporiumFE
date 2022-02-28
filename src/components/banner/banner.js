import React from "react";
import {Link} from "react-router-dom";
import "./banner.css"
import bannerImg from './BuggyBanner.png'
function Banner(){
    return (
        <>
            <img src={bannerImg} alt='Buggy The Clown' />
            <div className="menu">
                <h1>Paggy's Emporium</h1>
                <div className="nav">
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </>

    )
}
export default Banner;