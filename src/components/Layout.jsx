import React from 'react';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';

import Navbar from './Navbar';
import FooterButton from './FooterButton';
import '../styles/all.sass';

const TemplateWrapper = ({ children }) => {
  const meta = [
    {
      charset: 'utf-8'
    },
    {
      'http-equiv': 'X-UA-Compatible',
      content: 'IE=edge'
    },
    {
      name: 'viewport',
      content: 'initial-scale=1, minimum-scale=1, width=device-width, height=device-height'
    }
  ];

  const links = [
    {
      rel: 'shortcut icon',
      type: 'image/x-icon',
      href: '/public/icons/favicon.ico'
    },
    {
      rel: 'stylesheet',
      href:
        'https://fonts.googleapis.com/css?family=Roboto:300,400,500|Open+Sans:700,800|Julius+Sans+One|Heebo|Alef'
    },
    {
      rel: 'stylesheet',
      href: 'https://use.fontawesome.com/releases/v5.4.1/css/all.css',
      integrity: 'sha384-5sAR7xN1Nv6T6+dT2mhtzEpVJvfS3NScPQTrOxhwjIuvcA67KV2R5Jz6kr4abQsz',
      crossOrigin: 'anonymous'
    }
  ];
  return (
    <div>
      <Helmet title="Title" meta={meta} link={links} />
      <Navbar />
      <div>{children}</div>
      <FooterButton />
    </div>
  );
};

TemplateWrapper.propTypes = {
  children: PropTypes.shape({})
};

TemplateWrapper.defaultProps = {
  children: null
};

export default TemplateWrapper;
