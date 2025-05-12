import React, { useState, useRef } from "react";
import { ArrowRight } from "react-bootstrap-icons";
import Success from "../success-msg/success";
import emailjs from '@emailjs/browser';

const Form = ({ isColTwo }) => {
  const [showSuccess, setShowSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Get current date and time for the email
    const currentDate = new Date().toLocaleString();
    
    // Prepare template parameters
    const templateParams = {
      name: e.target.elements.name.value,
      email: e.target.elements.email.value,
      message: e.target.elements.message.value,
      date: currentDate
    };
    
    // Replace these with your actual EmailJS service ID, template ID, and public key
    emailjs.send(
      'service_6nztmvf', 
      'template_awazaip', 
      templateParams, 
      'tpUX7gwNs6jv9xpMT'
    )
    .then((result) => {
      console.log('Email sent successfully:', result.text);
      setShowSuccess(true);
      e.target.reset();
      
      // Hide success message after 5 seconds
      setTimeout(() => {
        setShowSuccess(false);
      }, 5000);
    })
    .catch((error) => {
      console.error('Error sending email:', error.text);
      alert('Failed to send message. Please try again later.');
    })
    .finally(() => {
      setIsLoading(false);
    });
  };

  return (
    <div className="replay__box cmn__bg">
      <h3>Leave a Reply</h3>
      <p>
        Your email address will not be published. Required fields are marked *
      </p>
      
      {showSuccess && <Success />}
      
      <form className="row g-4" onSubmit={handleSubmit}>
        <div className={` ${isColTwo ? "col-lg-6" : "col-lg-12"}`}>
          <input type="text" name="name" placeholder="Name" required />
        </div>
        <div className={` ${isColTwo ? "col-lg-6" : "col-lg-12"}`}>
          <input type="email" name="email" placeholder="Email" required />
        </div>
        <div className="col-lg-12">
          <textarea
            name="message"
            rows="5"
            placeholder="Write Comments"
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="d-flex fw-500 cmn--btn align-items-center gap-2"
          disabled={isLoading}
        >
          <span className="get__text">
            {isLoading ? "Sending..." : "Submit Comment"}
          </span>
          <span>
            <i className="fz-20">
              <ArrowRight />
            </i>
          </span>
        </button>
      </form>
    </div>
  );
};

export default Form;
