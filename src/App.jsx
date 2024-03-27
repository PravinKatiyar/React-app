import PropsConcept from "./Component/PropsConcept.jsx";
//import DynamicAttributeConcept from './DynamicAttributeConcept.jsx';
import { employeeList } from "./assets/employeeData.js";
import TabButton from "./Component/TabButton.jsx";
import { reactTopics } from "./assets/reactTopics.js";
import { useState } from "react";

function App() {
  const [selectedTopic, setSelectedTopic] = useState();
  function handleSelect(selectedButton) {
    setSelectedTopic(selectedButton);
    console.log(selectedTopic);
  }

  return (
    <div>
      <div>
        <menu>
          <TabButton onSelect={() => handleSelect("Components")}>
            Components
          </TabButton>
          <TabButton onSelect={() => handleSelect("Props")}>Props</TabButton>
          <TabButton onSelect={() => handleSelect("Router")}>Router</TabButton>
          <TabButton onSelect={() => handleSelect("Hooks")}>Hooks</TabButton>
        </menu>
        {!selectedTopic ? <p>Please select a topic</p> : null}
        {selectedTopic ? (
          <article>
            <h2>{reactTopics[selectedTopic].title}</h2>
            <h3>{reactTopics[selectedTopic].description}</h3>
          </article>
        ) : null}
      </div>
      {/* <PropsConcept empList={employeeList[0]} />
      <PropsConcept empList={employeeList[1]} />
      <PropsConcept empList={employeeList[2]} /> */}
      <ul>
      {employeeList.map((emp) => (
        <PropsConcept {...emp} />
      ))}
      </ul>
    </div>
  );
}

export default App;
