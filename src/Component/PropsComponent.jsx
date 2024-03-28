import { EMP_LIST, TODO_TOPICS } from "../assets/employeeData.js";
import PropsConcept from "./PropsConcept.jsx";
import PropsConcept2 from "./PropsConcept2.jsx";

export default function PropsComponent() {
  return (
    <>
      <ul>
        {EMP_LIST.map((emp) => (
          <PropsConcept key={emp.name} {...emp} />
        ))}
      </ul>

      {TODO_TOPICS.map((todo) => (
        <PropsConcept2 text={todo} />
      ))}
    </>
  );
}
