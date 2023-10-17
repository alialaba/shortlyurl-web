import React from "react";

import "./Home.css";
import InlineInputBtn from "../../components/InlineInputBtn";
// import Hero from "../../components/Hero"; links

export default function Home(){
    return(<>
       <section className="section__hero">
            <div className="container">
                <div className="hero stack center">
                    {/* <div className="hero__vertical"> */}
                    <h1 className="hero__title">Shorten  with Ease.
                    {/* <div className="slidingVertical">  
                        <span>Ease.</span>
                        <span>Minimal Effort.</span>
                        <span>Simplicity.</span>
                        <span>Smoothly.</span>
                    </div> */}
                    </h1>
                    {/* </div> */}
                    <p className="hero__text">Shorten, personalize, and share fully branded short URLs.</p>
                    <InlineInputBtn/>
                </div>
            </div>
        </section>
        
    </>)
}