import React from 'react';
import PropTypes from 'prop-types';
import HTMLElement from './HTMLElement';
import ContactForm from './ContactForm';

class Hero extends React.PureComponent {
  render() {
    const { intro, contact, top } = this.props;
    return (
      <div>
        <div className="container">
          <div className="columns">
            <div className="column is-7 intro">
              <div className="wrapper">
                <div className="intro-heading has-text-weight-bold">
                  <HTMLElement className="content">{intro.heading}</HTMLElement>
                </div>
                {intro.items.map(item => (
                  <div className="intro-items">
                    <HTMLElement className="content">{item.text}</HTMLElement>
                  </div>
                ))}
              </div>
            </div>
            <div className="column is-4">
              <ContactForm contact={contact} />
            </div>
          </div>
        </div>
        <div
          className="backgroundRear"
          style={{
            transform: `translate3d(0px, ${top}px, 0px)`,
            backgroundImage: `url(${intro.backgroundImage})`
          }}
        />
      </div>
    );
  }
}

export default Hero;

Hero.propTypes = {
  intro: PropTypes.shape({
    heading: PropTypes.string,
    text: PropTypes.string
  }),
  contact: PropTypes.shape({
    heading: PropTypes.string
  }),
  top: PropTypes.number
};

Hero.defaultProps = {
  intro: {
    heading: '',
    text: ''
  },
  contact: {
    heading: ''
  },
  top: 0
};
