import React from "react";
import { useNavigate } from "react-router-dom";
import error404 from "../../assets/error404.jpg"
import  "./ErrorPage.css";
export default function ErrorPage(){

    let navigate = useNavigate();
    return(
        <article className="error">
            <div className="container">
                <img src={error404 }/>
            <h2>This Page not found</h2>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam, praesentium? Quaerat dolorum totam sunt nesciunt!</p>
            <button onClick={()=> {navigate("/")}}>Back to Home</button>
            </div>
            
        </article>
    )
}