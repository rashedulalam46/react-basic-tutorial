import React from "react";

const constState = {
    title: "Sate Management in React",
    name: "John Doe",
    email: "john.doe@example.com",
    phone: {
        home: "555-1234",
        work: "555-5678"
    }   
    }

function State() {
  return (
    <div>
      <h1>{constState.title}</h1>
      <h2>Name: {constState.name}</h2>
      <p>Email: {constState.email}</p>
      <p>Home Phone: {constState.phone.home}</p>
      <p>Work Phone: {constState.phone.work}</p>
    </div>
  );
}

export default State;
