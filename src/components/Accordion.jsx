
import React, {useState} from "react";


export default function Accordion(props){
    
    const [showText, setShowText] = useState(false);
    return(
        <article className="accordion stack">
                
                  <header className="accordion__header">
                    <h4 className="accordion__heading">{props.item.title}</h4>
                    <button className="accordion__btn" onClick={()=> setShowText(!showText)}>
                    {showText ? <i className="fa-solid fa-minus"></i> : <i className="fa-solid fa-plus"></i>}
                    </button>
                  </header>
                {showText &&   <p className="accordion__text">{props.item.info}</p>}
        </article>
    )
}