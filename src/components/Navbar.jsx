import React from "react";
import { Link } from "react-router-dom";
export default function (){
    return(
        <header className="header">
              <div className="container">
            <nav className="nav">
        
                <div className="logo">
                    <span><Link to="/">Shortlyurl</Link></span>
                </div>
                    <ul className="nav__list">
                        {/* <li><Link to="/">Home</Link></li> */}
                        <li> <Link to="/whyus">Why Us</Link></li>
                        <li> <Link to="/blog">Blog</Link></li>
                        <li> <Link to="/login">Login</Link></li>
                        <li> <Link to="/signup">Sign up</Link></li>

                    </ul>
            </nav>
            </div>
        </header>
    )
}