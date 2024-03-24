import PropsConcept from "./Component/PropsConcept.jsx";
//import DynamicAttributeConcept from './DynamicAttributeConcept.jsx';
import { employeeList } from "./assets/employeeData.js";
import TabButton from "./Component/TabButton.jsx";

function App() {

  function handleSelect(selectedButton){
    alert('Button is Clicked!!  '+selectedButton)
  }


  return (
    <div>
      <div>
        <menu>
          <TabButton onSelect={() => handleSelect("Component")}>Component</TabButton>
          <TabButton onSelect={() => handleSelect("State")}>State</TabButton>
          <TabButton onSelect={() => handleSelect("React")}>React</TabButton>
          <TabButton onSelect={() => handleSelect("Event")}>Event</TabButton>
        </menu>
        <article></article>
      </div>
      {/* <PropsConcept empList={employeeList[0]} />
      <PropsConcept empList={employeeList[1]} />
      <PropsConcept empList={employeeList[2]} /> */}
    </div>
  );
}

export default App;
