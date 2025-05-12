import React from "react";
import "./success.scss";
import { CheckCircleFill } from "react-bootstrap-icons";

const Success = ({ message }) => {
  return (
    <div className="success-message">
      <CheckCircleFill className="success-icon" />
      <h4>{message || "Message sent successfully!"}</h4>
      <p>Thank you for contacting me. I'll get back to you soon.</p>
    </div>
  );
};

export default Success;