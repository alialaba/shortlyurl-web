import React, { useState, useEffect } from "react";

import "./Home.css";
import InlineInputBtn from "../../components/InlineInputBtn";
import AccordionItem from "../../components/Accordion";
import ActionCard from "../../components/ActionCard";
// import ftImg from "../../assets/tes.png"

export default function Home(props) {
  //Track the active item.
  const [activeItem, setActiveItem] = useState(0);

  //Keep track of which FAQ item is open
  const [openFAQ, setOpenFAQ] = useState(null);

  //Function to toggle the active item.
  const handleToggle = (index) => {
    if (index === activeItem) {
      // Clicking on the open item should not close it.
      return;
    }
    setActiveItem(index);
    console.log(index);
  };

  //Function to toggle faq for a specific FAQ item
  const handleFaqToggle = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <>
      <section className="section__hero">
        <div className="container">
          <div className="hero stack center">
            <h1 className="hero__title">
              Shorten <span>Links</span> with Ease.
            </h1>

            <p className="hero__text">
              Shorten, personalize, and share fully branded short URLs.
            </p>
            <div>
              <InlineInputBtn />
            </div>
            <ul className="hero__list">
              <li className="hero__item">
                <span className="hero__icon">
                  <i class="fa-solid fa-link"></i>
                </span>
                <span>Short Links</span>
              </li>
              <li className="hero__item">
                <span className="hero__icon">
                  <i class="fa-solid fa-qrcode"></i>
                </span>
                <span>QR Codes</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section__stats">
        <div className="container">
          <div className="stats stack">
            <div className="">
              <h4 className="stats__title">
                One Stop. <br></br>Four<span> Possibilities.</span>
              </h4>
            </div>
            <ul className="stats__row">
              <li className="stats__col">
                <h4 className="stats__value">3M</h4>
                <span className="stats__caption">Active users</span>
              </li>
              <li className="stats__col">
                <h4 className="stats__value">30M</h4>
                <span className="stats__caption">Links & QR codes created</span>
              </li>
              <li className="stats__col">
                <h4 className="stats__value">4B</h4>
                <span className="stats__caption">
                  activeItem & Scanned connections
                </span>
              </li>
              <li className="stats__col">
                <h4 className="stats__value">100K</h4>
                <span className="stats__caption">App Integrations</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section__features">
        <div className="container">
          <h2 className="subheading">
            Get the most out of every link you share
          </h2>

          <div className="features stack">
            <article className="features__img">
              {props.featuresData.map((item, index) => (
                <img
                  key={item.id}
                  style={{ display: activeItem === index ? "block" : "none" }}
                  src={item.featureImg}
                  alt="feature imag"
                />
              ))}
            </article>

            <article className="features__content stack">
              <h3 className="features__title">See what's inside</h3>
              <p className="features__text">
                shortlyurl provides advanced features that let businesses get
                all the benefits of link shortening.
              </p>

              {props.featuresData.map((item, index) => (
                <AccordionItem
                  key={item.id}
                  item={item}
                  onToggle={() => handleToggle(index)}
                  active={activeItem === index}
                />
              ))}
            </article>
          </div>

          <ActionCard />
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="faq-section">
        <div className="container">
          <div className="faq stack">
            <h2 className="subheading">Frequently Asked Questions</h2>

            {props.faqData.map((item, index) => (
              <AccordionItem
                key={item.id}
                item={item}
                open={openFAQ === index}
                onToggle={() => handleFaqToggle(index)}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
