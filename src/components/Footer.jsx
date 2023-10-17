import React from "react";

import logo from "../assets/react.svg"

export default function Footer(){
    return(
        <footer>
       <div className="container">
         <div className="footer__row stack">

            {/* column one */}
            <div className="footer__col stack">
                {/* <p className="footer__text">Why shortlyurl</p> */}
                <img src={logo} alt="logo"/>
                <ul className="footer__list footer__social">
                <li className="footer__item "><a href="#" className="footer__link"><i className="fa-brands fa-linkedin"></i></a></li>   
                <li className="footer__item "><a href="#" className="footer__link"><i className="fa-brands fa-linkedin"></i></a></li>
                <li className="footer__item "><a href="#" className="footer__link"><i className="fa-brands fa-instagram"></i></a></li>
                <li className="footer__item "><a href="#" className="footer__link"><i className="fa-brands fa-square-facebook"></i></a></li>
                </ul>
            </div>

            {/* column one */}
            <div className="footer__col stack">
            <p className="footer__text">Why shortlyurl?</p>
                <ul className="footer__list">
                <li className="footer__item"><a href="#" className="footer__link">Shortlyurl 101</a></li>
                <li className="footer__item"><a href="#" className="footer__link">Integrations & API</a></li>
                <li className="footer__item"><a href="#" className="footer__link">pricing</a></li>
                </ul>
            </div> 

            {/* column one  */}
            <div className="footer__col stack">
            <p className="footer__text">Products</p>
                <ul className="footer__list">
                <li className="footer__item"><a href="#" className="footer__link">Link Management</a></li>
                <li className="footer__item"><a href="#" className="footer__link">QR Codes</a></li>
                <li className="footer__item"><a href="#" className="footer__link">Link-in-bio</a></li>
                </ul>
            </div>

            {/* column one */}
            <div className="footer__col stack">
            <p className="footer__text">Company</p>
                <ul className="footer__list">
                <li className="footer__item"><a href="#" className="footer__link">About Shortlyurl</a></li>
                <li className="footer__item"><a href="#" className="footer__link">Careers</a></li>
                <li className="footer__item"><a href="#" className="footer__link">Contact</a></li>
                <li className="footer__item"><a href="#" className="footer__link">Blog</a></li>
                </ul>
            </div>
         </div>
       </div>
      </footer>
    );
}