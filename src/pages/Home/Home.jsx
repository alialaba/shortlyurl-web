import React, {useState} from "react";

import "./Home.css";
import InlineInputBtn from "../../components/InlineInputBtn";
import AccordionItem from "../../components/Accordion";
import ftImg from "../../assets/tes.png"

export default function Home(props){

    const [clicked, setClicked] = useState(0);

    const handleToggle =(index)=>{
      setClicked(index === clicked ? null : index)
    }


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

        <section className="section__features">
         <div className="container">
            <h2 className="subtitle">Get the most out of every link you share</h2>
            <div className="features">

            <article className="features__img">
                   <img src={ftImg} alt="feature imag"/>

            </article>
                  
                <article className="features__content">
                    <h3 className="whyus__title">Why Us?</h3>
                    <p>shortlyurl provides advanced features that let businesses get all the benefits of link shortening.</p>
                
                {props.featuresData.map((item, index)=>(
                   <AccordionItem
                    key={item.id} item={item} 
                    onToggle={()=> handleToggle(index)}
                    active={clicked === index}
                     />
                ))}
                
                </article>

                

          

            </div>

         </div>
        </section>
        
    </>)
}