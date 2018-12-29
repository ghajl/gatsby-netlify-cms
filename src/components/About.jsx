import React from 'react';
import PropTypes from 'prop-types';
import HTMLElement from './HTMLElement';
import PreviewCompatibleImage from './PreviewCompatibleImage';

const About = ({ about }) => (
  <div className="container">
    <div className="heading">{about.heading}</div>
    <div className="content">
      <HTMLElement className="text" style={{ display: 'inline-block' }}>
        {about.text}
      </HTMLElement>
      <div className="photo">
        <PreviewCompatibleImage imageInfo={about.image} />
      </div>
    </div>
  </div>
);

export default About;

About.propTypes = {
  about: PropTypes.shape({
    heading: PropTypes.string,
    image: PropTypes.string,
    text: PropTypes.string
  })
};

About.defaultProps = {
  about: {
    heading: '',
    image: '',
    text: ''
  }
};
