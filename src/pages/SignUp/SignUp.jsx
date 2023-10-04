import React from "react";
import {useNavigate} from "react-router-dom";
export default function SignUp(){

    let navigate = useNavigate();
    return(
        <div>
           
            <h3> Sign up</h3>
            <button onClick={()=> {navigate("/")}}>Move</button>
        </div>
    );
}