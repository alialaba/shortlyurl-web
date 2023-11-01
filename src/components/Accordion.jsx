
import React, {useState} from "react";
import { useNavigate } from "react-router-dom";


export default function Accordion(props){
    
    // const [showText, setShowText] = useState(false);

    let navigate = useNavigate()

    
    return(
        <article className={`accordion stack ${props.active ? "active" : ""}`}>
              
                  <header className="accordion__header">
                    <h4 className="accordion__heading">{props.item.title}</h4>
                    <button className="accordion__btn" onClick={props.onToggle}>
                    {props.active ? <i className="fa-solid fa-minus"></i> : <i className="fa-solid fa-plus"></i>}
                    </button>  
                  </header>
                {props.active &&
                <div>
                  <p className={`accordion__text ${props.active ? "open" : ""}`}>{props.item.info}</p>
                  <button style={{color: "#fff" , fontSize:".8rem", cursor: "pointer"}} onClick={()=> {navigate("/")}}>Read more</button>
                  
                  </div>}

                  {props.open &&
                <div>
                  <p className={`accordion__text ${props.open ? "open" : ""}`}>{props.item.info}</p>
                  </div>}
        
        </article>
    )
}