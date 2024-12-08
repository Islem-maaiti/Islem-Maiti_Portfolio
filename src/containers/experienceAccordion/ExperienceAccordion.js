import React, { Component } from "react";
import ExperienceCard from "../../components/experienceCard/ExperienceCard.js";
import "./ExperienceAccordion.css";
import { Accordion, Panel } from "baseui/accordion";

class ExperienceAccordion extends Component {
  render() {
    const theme = this.props.theme;

    // Filtrer les sections pour inclure celles avec 'internship' ou 'volunteership' dans le titre
    const relevantSections = this.props.sections.filter((section) =>
      ["internship", "volunteership"].some((keyword) =>
        section["title"].toLowerCase().includes(keyword)
      )
    );

    return (
      <div className="experience-accord">
        <Accordion>
          {relevantSections.map((section) => {
            return (
              <Panel
                className="accord-panel"
                title={section["title"]}
                key={section["title"]}
                overrides={{
                  Header: {
                    style: () => ({
                      backgroundColor: theme.body,
                      border: "1px solid",
                      borderRadius: "5px",
                      borderColor: theme.headerColor,
                      marginBottom: "3px",
                      fontFamily: "Google Sans Regular",
                      color: theme.text,
                      ":hover": {
                        color: theme.secondaryText,
                      },
                    }),
                  },
                  Content: {
                    style: () => ({
                      backgroundColor: theme.body,
                    }),
                  },
                }}
              >
                {section["experiences"].map((experience, index) => {
                  return (
                    <ExperienceCard
                      key={index}
                      index={index}
                      totalCards={section["experiences"].length}
                      experience={experience}
                      theme={theme}
                    />
                  );
                })}
              </Panel>
            );
          })}
        </Accordion>
      </div>
    );
  }
}

export default ExperienceAccordion;