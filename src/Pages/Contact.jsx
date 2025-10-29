import React from 'react';

function Contact(props) {
  return (
    <div>
      <h2>Contact Us</h2>
      <p>If you have any questions, feel free to reach out!</p>
      <p>Email: {props.email}</p>
      <p>Phone: {props.phone}</p>
    </div>
  );
}

export default Contact;
