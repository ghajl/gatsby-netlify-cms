import React from 'react';
import PropTypes from 'prop-types';
import HTMLElement from './HTMLElement';

const Skills = ({ skills }) => (
  <div className="">
    <div className="heading">{skills.heading}</div>
    <div className="content">
      <div className="list">
        <ul>
          {skills.items.map(item => (
            <li>
              <HTMLElement style={{ display: 'inline-block' }}>{item.text}</HTMLElement>
            </li>
          ))}
        </ul>
      </div>
      <div className="photo">
        <img
          src={skills.image.childImageSharp ? skills.image.childImageSharp.fluid.src : skills.image}
          alt=""
        />
      </div>
    </div>
  </div>
);

export default Skills;

Skills.propTypes = {
  skills: PropTypes.shape({
    heading: PropTypes.string,
    image: PropTypes.string,
    items: PropTypes.array
  })
};

Skills.defaultProps = {
  skills: {
    heading: '',
    image: '',
    items: []
  }
};
