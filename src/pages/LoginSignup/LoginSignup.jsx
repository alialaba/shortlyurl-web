import React, {useState} from "react";
import {useNavigate} from "react-router-dom";
import Button from "../../components/Button";
import "./LoginSignup.css"
export default function SignUp(){

    // let navigate = useNavigate();
    const [action, setAction] = useState("Login")

    return(
        <section>
           <div className="container">
            <div className="credential stack">
            <div className="credential__header">
                <Button text="Login" onClick={()=> setAction("Login")} className={` ${action === "Login" ? "credential__btn" : "credential__btn gray"}`}/>
              
                <Button text="Sign Up" onClick={()=> setAction("Sign Up")} className={`${action === "Sign Up" ? "credential__btn" : "credential__btn gray"}`}/>
            </div>

            <div className="credential__form">

                {action === "Login" ? 
                <></> : 
                <div className="form-col">
               {/* <label htmlFor="fullname">Fullname</label> */}
               <i class="fa-regular fa-user"></i>
               <input type="text" name="name" placeholder="Fullname"/>
               </div>
                 }
               
               <div className="form-col">
               {/* <label htmlFor="email">Email</label> */}
               <i class="fa-regular fa-envelope"></i>
               <input type="email" placeholder="Email"/>
               </div>
               <div className="form-col">
               <i class="fa-solid fa-lock"></i>
               {/* <label htmlFor="password">Password</label> */}
               <input type="text" placeholder="Password"/>
               <i class="fa-regular fa-eye"></i>
               </div>
               <Button className="credential__btn credential__submit" text={`${action === "Login" ? "Login" :"Sign Up"}`}/>
            </div>
            
            </div> 
            </div>
        </section>
    );
}