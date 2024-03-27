import React from "react";
import "../App.css";

export function PropsConcept({ name, Role, Company }) {
  //    const { name, Role, Company } = empList;
  return (
    <div className="card">
      <div className="card-title">
        <h3>Name: {name}</h3>
      </div>
      <div className="card-content">
        <h3>Role: {Role}</h3>
        <h3>Company: {Company}</h3>
      </div>
    </div>
  );
}

export default PropsConcept;
