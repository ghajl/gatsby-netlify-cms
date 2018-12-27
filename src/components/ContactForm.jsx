import React from 'react';
import PropTypes from 'prop-types';

const ContactForm = ({ contact }) => (
  <div className="contact">
    <fieldset>
      <div className="contact-form-heading">{contact.heading}</div>
      <form method="POST" action="https://formspree.io/michaelmsky@gmail.com">
        <div className="hidden">
          <label htmlFor="_gotcha">
            Don’t fill this out if you're human:{' '}
            <input name="_gotcha" tabIndex="-1" autoComplete="false" />
          </label>
        </div>
        <div className="form-wrapper">
          <div className="input-field">
            <input placeholder="שם" required type="text" name="first-name" id="first-name" />
          </div>

          <div className="input-field">
            <input
              required
              type="text"
              name="email"
              id="email"
              placeholder="mymail@mail.com"
              pattern="^[a-zA-Z0-9.+-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$"
              title="mymail@mail.com"
            />
          </div>
          <div className="input-field">
            <input placeholder="טלפון" required type="text" name="phone" id="phone" />
          </div>
          <div className="input-field">
            <textarea placeholder="ההודעה שלך" id="message" name="message" />
          </div>
          <div className="input-field">
            <input type="submit" value="שלח/י" />
          </div>
        </div>
      </form>
    </fieldset>
  </div>
);

export default ContactForm;

ContactForm.propTypes = {
  contact: PropTypes.shape({
    heading: PropTypes.string,
    subheading: PropTypes.string
  })
};

ContactForm.defaultProps = {
  contact: {
    heading: '',
    subheading: ''
  }
};
