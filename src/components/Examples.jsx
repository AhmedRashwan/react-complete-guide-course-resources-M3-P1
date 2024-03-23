import React, { useState } from "react";
import { topics } from "../data";
import TabButton from "./TabButton";
import Section from "./Section";
import Tab from "./Tab";

const Examples = () => {
  let [selectedTopic, setSelectedTopic] = useState();

  function handleSelect(selectedButton) {
    setSelectedTopic(selectedButton);
  }
  return (
    <Section id="examples" title="Examples">
      <Tab buttonContainer="menu">
        <TabButton
          isSelected={selectedTopic === "component"}
          onClick={() => handleSelect("component")}
        >
          Component
        </TabButton>
        <TabButton
          isSelected={selectedTopic === "jsx"}
          onClick={() => handleSelect("jsx")}
          id="tests"
        >
          JSX
        </TabButton>
        <TabButton
          isSelected={selectedTopic === "props"}
          onClick={() => handleSelect("props")}
        >
          Props
        </TabButton>
        <TabButton
          isSelected={selectedTopic === "state"}
          onClick={() => handleSelect("state")}
        >
          State
        </TabButton>
      </Tab>
      {selectedTopic && (
        <div id="tab-content">
          <h3>{topics[selectedTopic].title}</h3>
          <p>{topics[selectedTopic].description}</p>
          <pre>
            <code>{topics[selectedTopic].code}</code>
          </pre>
        </div>
      )}
    </Section>
  );
};

export default Examples;
