import React from "react";
import { concepts } from "../data";
import CoreConcept from "./CoreConcept";
import Section from "./Section";

const CoreConcepts = () => {
  return (
    <Section id="core-concepts" title="Core Concepts">
      <ul>
        {concepts.map((concept) => (
          <CoreConcept key={concept.id} {...concept} />
        ))}
      </ul>
    </Section>
  );
};

export default CoreConcepts;
