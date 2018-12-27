import React from 'react';
import PropTypes from 'prop-types';

const ContactFormBottom = ({ contact }) => (
  <div className="">
    <fieldset>
      <div className="contact-form-bottom-heading">{contact.heading}</div>
      <form method="POST" action="https://formspree.io/michaelmsky@gmail.com">
        <div className="hidden">
          <label htmlFor="_gotcha">
            Don’t fill this out if you're human:{' '}
            <input name="_gotcha" tabIndex="-1" autoComplete="false" />
          </label>
        </div>
        <div className="form-bottom-wrapper">
          <div className="input-field">
            <label htmlFor="first-name-bottom-form">
              <div className="la-label">
                <span>שם:</span>
              </div>
              <input
                required
                type="text"
                name="first-name-bottom-form"
                id="first-name-bottom-form"
              />
            </label>
          </div>

          <div className="input-field">
            <label htmlFor="email-bottom-form">
              <div className="la-label">
                <span>דוא"ל:</span>
              </div>
              <input
                required
                type="text"
                name="email-bottom-form"
                id="email-bottom-form"
                placeholder="mymail@mail.com"
                pattern="^[a-zA-Z0-9.+-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$"
                title="mymail@mail.com"
              />
            </label>
          </div>
          <div className="input-field">
            <label htmlFor="phone-bottom-form">
              <div className="la-label">
                <span>טלפון:</span>
              </div>
              <input required type="text" name="phone-bottom-form" id="phone-bottom-form" />
            </label>
          </div>
          <div className="input-field">
            <input type="submit" value="שלח/י" />
          </div>
        </div>
      </form>
    </fieldset>
  </div>
);

export default ContactFormBottom;

ContactFormBottom.propTypes = {
  contact: PropTypes.shape({
    heading: PropTypes.string,
    subheading: PropTypes.string
  })
};

ContactFormBottom.defaultProps = {
  contact: {
    heading: '',
    subheading: ''
  }
};
