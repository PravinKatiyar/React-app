import React from "react";
import reactImg from "../assets/images.png";
const getRandomWords = ["React", "Fundamentals", "Frontend"];

function getRandom(max) {
  return Math.floor(Math.random() * (max + 1));
}

export default function RandomValueGenerator() {
  const desc = getRandomWords[getRandom(2)];
  return (
    <div>
      <p>Random Generated value is: {desc}</p>
      <img src={reactImg} height="100px" width="150px"/>
    </div>
  );
}

