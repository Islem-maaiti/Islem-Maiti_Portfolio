import React, { useState } from "react";
import "./Greeting.css";
import Typing from "react-typing-animation";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import Button from "../../components/button/Button";
import { greeting } from "../../portfolio";
import { Fade } from "react-reveal";
import FeelingProud from "./FeelingProud";

// Importation de l'image avec la méthode `import`


export default function Greeting(props) {
  const theme = props.theme;
  const [typingComplete, setTypingComplete] = useState(false); // État pour gérer la fin de l'animation

  const handleTypingEnd = () => {
    setTypingComplete(true); // Quand l'animation de typage se termine, on met à jour l'état
    console.log("Typing animation finished!");
  };

  return (
    <Fade bottom duration={2000} distance="40px">
      <div className="greet-main" id="greeting">
        <div className="greeting-main">
          <div className="greeting-text-div">
            <div>
              <h1 className="greeting-text" style={{ color: theme.text }}>
                {greeting.title}
              </h1>
              {greeting.nickname && (
                <h2 className="greeting-nickname" style={{ color: theme.text }}>
                  ( {greeting.nickname} )
                </h2>
              )}
              <p className="greeting-text-p subTitle" style={{ color: theme.secondaryText }}>
                <Typing loop={false} speed={50} onFinishedTyping={handleTypingEnd}>
                  {greeting.subTitle}
                </Typing>
              </p>
              <SocialMedia theme={theme} />
              {/* <div className="portfolio-repo-btn-div">
                <Button
                  text="⭐ Star Me On Github"
                  newTab={true}
                  href={greeting.portfolio_repository}
                  theme={theme}
                  className="portfolio-repo-btn"
                />
              </div> */}
              {/* <div className="button-greeting-div">
              <Button text="Contact me" href="#contact" />
              <Button text="See my resume" newTab={true} href={greeting.resumeLink} />
            </div> */}
            </div>
          </div>
          <div className="greeting-image-div">
            { <img
							alt="saad sitting on table"
							src={require("../../assets/images/islem.png")}
						></img> }
            {/* <FeelingProud theme={theme} /> */}
          </div>
        </div>
      </div>
    </Fade>
  );
}
