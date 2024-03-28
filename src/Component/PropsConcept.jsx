import React from "react";
import "../App.css";

export function PropsConcept({ name, Role, Company }) {
  return (
    <div className="card-container">
      <div className="card">
        <div className="card-title">
          <h3>Name: {name}</h3>
        </div>
        <div className="card-content">
          <h3>Role: {Role}</h3>
          <h3>Company: {Company}</h3>
        </div>
      </div>
    </div>
  );
}

export default PropsConcept;
