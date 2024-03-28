import TabButton from "./TabButton.jsx";
import { reactTopics } from "../assets/reactTopics.js";
import { useState } from "react";
import Section from "./Section.jsx";
import "./DynamicAttributeComponent.css";

export default function () {
  const [selectedTopic, setSelectedTopic] = useState();
  function handleSelect(selectedButton) {
    setSelectedTopic(selectedButton);
    console.log(selectedTopic);
  }
  return (
    <>
      <Section className="topicContent">
        <menu>
          <TabButton
            isSelected={selectedTopic === "Components"}
            onSelect={() => handleSelect("Components")}
          >
            Components
          </TabButton>
          <TabButton
            isSelected={selectedTopic === "Props"}
            onSelect={() => handleSelect("Props")}
          >
            Props
          </TabButton>
          <TabButton
            isSelected={selectedTopic === "Router"}
            onSelect={() => handleSelect("Router")}
          >
            Router
          </TabButton>
          <TabButton
            isSelected={selectedTopic === "Hooks"}
            onSelect={() => handleSelect("Hooks")}
          >
            Hooks
          </TabButton>
        </menu>
        {!selectedTopic ? <p>Please select a topic</p> : null}
        {selectedTopic ? (
          <article>
            <h4>{reactTopics[selectedTopic].title}</h4>
            <p>{reactTopics[selectedTopic].description}</p>
          </article>
        ) : null}
      </Section>
    </>
  );
}
