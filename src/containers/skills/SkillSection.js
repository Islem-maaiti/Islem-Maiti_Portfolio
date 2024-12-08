import React, { Component } from "react";
import "./Skills.css";
import SoftwareSkill from "../../components/softwareSkills/SoftwareSkill";
import { skills } from "../../portfolio";
import { Fade } from "react-reveal";
import DataScienceImg from "./DataScienceImg";
import FullStackImg from "./FullStackImg";
import CloudInfraImg from "./CloudInfraImg";
import DesignImg from "./DesignImg";

/**
 * A functional component to dynamically render skill SVGs based on the fileName prop.
 */
const SkillSvg = ({ fileName, theme }) => {
  switch (fileName) {
    case "DataScienceImg":
      return <DataScienceImg theme={theme} />;
    case "FullStackImg":
      return <FullStackImg theme={theme} />;
    case "CloudInfraImg":
      return <CloudInfraImg theme={theme} />;
    default:
      return <DesignImg theme={theme} />;
  }
};

class SkillSection extends Component {
  renderSkillCard(skill, theme, index) {
    return (
      <div key={index} className="skills-main-div">
        <Fade left duration={2000}>
        <div className="skills-image-div" style={{ marginTop: "120px" }}> {/* Ajout de marge ici */}
        {skill.fileName === "DataScienceImg" && (
            <>
              <img
                alt={`${skill.title} illustration`}
                src={require(`../../assets/images/machine_learning.png`)}
                style={{
                  width: "60%",
                  height: "auto",
                  marginTop: "120px",
                }}
              />
              <img
                alt={`${skill.title} illustration`}
                src={require(`../../assets/images/deep_learning.png`)}
                style={{
                  width: "60%",
                  height: "auto",
                  marginBottom: "-30px",
                }}
              />
              <img
                alt={`${skill.title} illustration`}
                src={require(`../../assets/images/nlp.jpg`)}
                style={{
                  width: "75%",
                  height: "auto",
                  marginBottom: "-30px",
                  marginBottom: "-5px", // petit espace entre les deux images

                }}
                        />
              <img
                alt={`${skill.title} illustration`}
                src={require(`../../assets/images/agent-ia.jpg`)}
                style={{
                  width: "60%",
                  height: "auto",
                  marginBottom: "-30px",
                }}
              />
              <img
                alt={`${skill.title} illustration`}
                src={require(`../../assets/images/llm.jpg`)}
                style={{
                  width: "65%",
                  height: "auto",
                  marginBottom: "-30px",
                }}
              />
            </>
          )}
          {skill.fileName === "StatisticsImg" && (
            <>
              <img
                alt={`${skill.title} illustration`}
                src={require(`../../assets/images/stat-removebg-preview.png`)}
                style={{
                  width: "80%",
                  height: "auto",
                  marginTop: "120px",
                }}
              />
                 
            </>
          )}
          
          {skill.fileName === "ActuarialScienceImg" && (
            <>
              <img
                alt={`${skill.title} illustration`}
                src={require(`../../assets/images/actuariat.png`)}
                style={{
                  width: "80%",
                  height: "auto",
                }}
              />
                 
            </>
          )}
          {skill.fileName === "DevopsImg" && (
            <>
              <img
                alt={`${skill.title} illustration`}
                src={require(`../../assets/images/devops.png`)}
                style={{
                  width: "70%",
                  height: "auto",
                  marginTop: "20px",

                }}
              />
                 
            </>
          )}
          
          {skill.fileName === "FullStackImg" && (
            <>
              <img
                alt={`${skill.title} illustration`}
                src={require(`../../assets/images/FullStackDev.webp`)}
                style={{
                  width: "70%",
                  height: "auto",
                  marginTop: "20px",

                }}
              />
                 
            </>
          )}

  
          </div>
        </Fade>

        <div className="skills-text-div">
          <Fade right duration={1000}>
            <h1 className="skills-heading" style={{ color: theme.text }}>
              {skill.title}
            </h1>
          </Fade>
          <Fade right duration={1500}>
            <SoftwareSkill logos={skill.softwareSkills} />
          </Fade>
          <Fade right duration={2000}>
            <div>
              {skill.skills.map((sentence, i) => (
                <p
                  key={i}
                  className="subTitle skills-text"
                  style={{ color: theme.secondaryText }}
                >
                  {sentence}
                </p>
              ))}
            </div>
          </Fade>
        </div>
      </div>
    );
  }

  render() {
    const { theme } = this.props;

    return (
      <div>
        {skills.data.map((skill, index) => this.renderSkillCard(skill, theme, index))}
      </div>
    );
  }
}

export default SkillSection;
