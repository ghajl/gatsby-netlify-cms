import React from 'react';
import PropTypes from 'prop-types';
import HTMLElement from './HTMLElement';

const Clients = ({ clients, top }) => (
  <div className="">
    <div className="heading">{clients.heading}</div>
    <div className="description">
      <HTMLElement className="content">{clients.description}</HTMLElement>
    </div>
    <div className="list p-t-lg">
      <ul>
        {clients.items.map(item => (
          <li>
            <span className="la-icon">
              <i className="fas fa-check-double" />
            </span>
            <HTMLElement className="list-text" style={{ display: 'inline-block' }}>
              {item.text}
            </HTMLElement>
          </li>
        ))}
      </ul>
    </div>
    <div
      className="backgroundRear"
      style={{
        backgroundImage: `url(${
          clients.backgroundImage.childImageSharp
            ? clients.backgroundImage.childImageSharp.fluid.src
            : clients.backgroundImage
        })`
      }}
    />
  </div>
);

export default Clients;

Clients.propTypes = {
  clients: PropTypes.shape({
    heading: PropTypes.string,
    backgroundImage: PropTypes.string,
    description: PropTypes.string,
    items: PropTypes.array
  }),
  top: PropTypes.number
};

Clients.defaultProps = {
  clients: {
    heading: '',
    backgroundImage: '',
    description: '',
    items: []
  },
  top: 0
};
