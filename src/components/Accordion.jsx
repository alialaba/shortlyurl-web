
import React, {useState} from "react";


export default function Accordion(props){
    
    // const [showText, setShowText] = useState(false);

    
    return(
        <article className={`accordion stack ${props.active ? "active" : ""}`}>
              
                  <header className="accordion__header">
                    <h4 className="accordion__heading">{props.item.title}</h4>
                    <button className="accordion__btn" onClick={props.onToggle}>
                    {props.active ? <i className="fa-solid fa-minus"></i> : <i className="fa-solid fa-plus"></i>}
                    </button>
                  </header>
                {props.active &&   <p className={`accordion__text ${props.active ? "open" : ""}`}>{props.item.info}</p>}
        </article>
    )
}