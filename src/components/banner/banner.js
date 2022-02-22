import React from "react";
import {Link} from "react-router-dom";
import "./banner.css"
function Banner(){
    return (
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
                        <li>
                            <Link to="/projects">Projects</Link>
                        </li>
                    </ul>
                </div>
            </div>
    )
}
export default Banner;