import { React } from "react";
import image from "../assets/react-core-concepts.png";
import "./Header.css";
let sentences = ["Fundemental", "Basic", "Core"];
function getRandom(max) {
  let number = Math.floor(Math.random() * max);
  return number;
}
export function Header(props) {
  return (
    <>
      <header>
        <img src={image} alt="Stylized atom" />
        <h1>React Essentials</h1>
        <p>
          {sentences[getRandom(3)]} React concepts you will need for almost any
          app you are going to build!
        </p>
        {props.name}
      </header>
    </>
  );
}
