import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';

const PreviewCompatibleImage = ({ style, className, imageInfo }) => {
  const { alt = '', childImageSharp, image, value = '' } = imageInfo;
  const imageStyle = {
    position: 'absolute',
    top: '0px',
    left: '0px',
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    objectPosition: 'center center'
  };
  console.log(imageInfo);
  if (image && image.childImageSharp) {
    return (
      <Img
        className={`${className}`}
        style={{ ...style }}
        fluid={image.childImageSharp.fluid}
        alt={alt}
      />
    );
  }

  if (childImageSharp) {
    return (
      <Img
        className={`${className}`}
        style={{ ...style }}
        fluid={childImageSharp.fluid}
        alt={alt}
      />
    );
  }

  if (image && typeof image === 'string')
    return (
      <React.Fragment>
        <div style={{ width: '100%', paddingBottom: '66.6667%' }} />
        <img className={`${className}`} style={{ ...style, ...imageStyle }} src={image} alt={alt} />
      </React.Fragment>
    );

  if (!image && value)
    return (
      <React.Fragment>
        <div style={{ width: '100%', paddingBottom: '66.6667%' }} />
        <img className={`${className}`} style={{ ...style, ...imageStyle }} src={value} alt={alt} />
      </React.Fragment>
    );
  return null;
};

PreviewCompatibleImage.propTypes = {
  className: PropTypes.string,
  style: PropTypes.shape({}),
  imageInfo: PropTypes.shape({
    alt: PropTypes.string,
    value: PropTypes.string,
    childImageSharp: PropTypes.object,
    image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]).isRequired
  }).isRequired
};

PreviewCompatibleImage.defaultProps = {
  className: '',
  style: {}
};

export default PreviewCompatibleImage;
