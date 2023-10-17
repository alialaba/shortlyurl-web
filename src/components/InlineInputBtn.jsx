import React from "react";
import Button from "./Button";


export default function InlineInputBtn(){
    return(
        <>
        <div className="inliner">
            <form className="inliner__form">
                    <input className="inliner__input" placeholder="E.g: http://lengthy-link-url.com/shorten"/>
                    <Button text="Shorten" className="inliner__btn"/>
            </form>

        </div>
        </>
    )
}