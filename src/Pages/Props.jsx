import React from 'react';

function Props(props) {
  return (
    <div>
      <h2>Props Example {props.order}</h2>
      <p>Email: {props.email}</p>
      <p>Phone: {props.phone}</p>
    </div>
  );
}
export default Props;
