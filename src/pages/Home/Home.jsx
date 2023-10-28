import React, {useState, useEffect} from "react";

import "./Home.css";
import InlineInputBtn from "../../components/InlineInputBtn";
import AccordionItem from "../../components/Accordion";
// import ftImg from "../../assets/tes.png"

export default function Home(props){

    const [clicked, setClicked] = useState(0);

    const handleToggle =(index)=>{
      setClicked(index === clicked ? null : index)
    }

    useEffect(() => {
        // Add an effect to open the first item by default
        setClicked(0);
      }, []);


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

        <section  className="section__stats">
            <div className="container">
                <div className="stats stack">
                   <h2 className="stats__title">One Stop. <br></br>Four<span> Possibilities.</span></h2>
                   <ul className="stats__row">
                    <li className="stats__col">
                        <h3 className="stats__value">3M</h3>
                        <span className="stats__caption">Active users</span>
                    </li>
                    <li className="stats__col">
                        <h3 className="stats__value">30M</h3>
                        <span className="stats__caption">Links & QR codes created</span>
                    </li>
                    <li className="stats__col">
                        <h3 className="stats__value">4B</h3>
                        <span className="stats__caption">Clicked & Scanned connections</span>
                    </li>
                    <li className="stats__col">
                        <h3 className="stats__value">100K</h3>
                        <span className="stats__caption">App Integrations</span>
                    </li>

                   </ul>
                </div>

            </div>
        </section>


        <section className="section__features">
         <div className="container">
            <h2 className="subtitle">Get the most out of every link you share</h2>
            
            <div className="features">

            <article className="features__img">
                 
                   {props.featuresData.map((item,index)=>(
                    <img key={item.id} style={{display: clicked === index ? "block" : "none"}}  src={item.featureImg} alt="feature imag"/>
                    
                   ))}

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