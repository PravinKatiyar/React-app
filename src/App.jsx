import PropsConcept from "./Component/PropsConcept.jsx";
//import DynamicAttributeConcept from './DynamicAttributeConcept.jsx';
import { employeeList } from "./assets/employeeData.js";
import TabButton from "./Component/TabButton.jsx";

function App() {
  return (
    <div>
      <div>
        <TabButton>Component</TabButton>
      </div>
      <PropsConcept empList={employeeList[0]} />
      <PropsConcept empList={employeeList[1]} />
      <PropsConcept empList={employeeList[2]} />
    </div>
  );
}

export default App;
