import React from 'react';
import reactImg from './assets/images.png';
const getRandomWords =['React', 'Fundamentals','Frontend']
function getRandom(max){
  return Math.floor(Math.random() * (max+ 1));
}


export function DynamicAttributeConcept() {
 const desc = getRandomWords[getRandom(2)]
  return(
    <div>
    <h3>This is an Heading</h3>
    <p>Random Generated value is: {desc}</p>
    <img src ={reactImg}/>
    </div>
  );
}


export default DynamicAttributeConcept;
