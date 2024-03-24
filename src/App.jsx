import PropsConcept from './Component/PropsConcept.jsx';
//import DynamicAttributeConcept from './DynamicAttributeConcept.jsx';
import { employeeList } from './assets/employeeData.js';


function App() {
  return (
    <div>
      <PropsConcept empList= {employeeList[0]} />
      <PropsConcept empList={employeeList[1]} />
      <PropsConcept empList = {employeeList[2]} />
    </div>
  )
}

export default App
