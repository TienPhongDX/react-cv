import React from "react";
import MapBox from "./mapBox";
import ContactForm from "./contactForm"
function Contact() {
  return (
    <div className="box box-content">
      <div className="pb-2">
        <h1 className="title title--h1 first-title title__separate">Contact</h1>
      </div>
      {/* Contact */}
      <MapBox/>
      {/* <MapBox/> */}
      <h2 className="title title--h3">Contact Form</h2>
      <ContactForm/>
    </div>
  );
}

export default Contact;
