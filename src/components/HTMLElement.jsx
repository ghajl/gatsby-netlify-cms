/* eslint-disable react/no-danger */
import React from 'react';
import PropTypes from 'prop-types';

const HTMLElement = ({ className, style, children }) => (
  <div
    className={`${className}`}
    style={{ ...style }}
    dangerouslySetInnerHTML={{ __html: children }}
  />
);

export default HTMLElement;

HTMLElement.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  classes: PropTypes.shape({}),
  style: PropTypes.shape({})
};

HTMLElement.defaultProps = {
  className: '',
  classes: {},
  style: {}
};
