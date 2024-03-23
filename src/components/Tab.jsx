import React from "react";

const Tab = ({ children, buttonContainer }) => {
  const ButtonContainer = buttonContainer;
  return <ButtonContainer>{children}</ButtonContainer>;
};

export default Tab;
