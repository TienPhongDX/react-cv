import React from "react";

function contactForm() {
  return (
    <form
      id="contact-form mc-embedded-subscribe-form"
      className="contact-form validate"
      data-toggle="validator"
      action="https://gmail.us17.list-manage.com/subscribe/post?u=f147bd99a0307b8005338d8de&id=92101813c8"
      method="post"
      name="mc-embedded-subscribe-form"
      target="_blank"
    >
      <div className="row">
        <div className="form-group col-12 col-md-6">
          <input
            type="text"
            className="form-control required"
            id="nameContact"
            name="MMERGE1"
            placeholder="Full name"
            required="required"
            autoComplete="on"
            onInvalid="setCustomValidity('Fill in the field')"
            onKeyUp="setCustomValidity('')"
          />
          <div className="help-block with-errors" />
        </div>
        <div className="form-group col-12 col-md-6">
          <input
            type="email"
            className="form-control required email"
            id="emailContact"
            name="EMAIL"
            placeholder="Email address"
            required="required"
            autoComplete="on"
            onInvalid="setCustomValidity('Email is incorrect')"
            onKeyUp="setCustomValidity('')"
          />
          <div className="help-block with-errors" />
        </div>
        <div className="form-group col-12 col-md-12">
          <textarea
            className="textarea form-control"
            id="messageContact"
            name="MMERGE2"
            placeholder="Your Message"
            rows={4}
            required="required"
            onInvalid="setCustomValidity('Fill in the field')"
            onKeyUp="setCustomValidity('')"
            defaultValue={""}
          />
          <div className="help-block with-errors" />
        </div>
      </div>
      <div className="row">
        <div className="col-12 col-md-6 order-2 order-md-1 text-center text-md-left">
          <div id="validator-contact" className="hidden" />
        </div>
        <div className="col-12 col-md-6 order-1 order-md-2 text-right">
          <button
            type="submit"
            className="btn"
            defaultValue="Subscribe"
            name="subscribe"
          >
            <i className="font-icon icon-send" /> Send Message
          </button>
        </div>
      </div>
    </form>
  );
}

export default contactForm;
