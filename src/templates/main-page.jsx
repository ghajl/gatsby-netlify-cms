import React from 'react';
import PropTypes from 'prop-types';
import ContactFormBottom from '../components/ContactFormBottom';
import Skills from '../components/Skills';
import Clients from '../components/Clients';
import About from '../components/About';
import Hero from '../components/Hero';

class MainPageTemplate extends React.PureComponent {
  state = {
    top: 0
  };

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    const scrolltop = window.pageYOffset;
    const top = scrolltop * 0.5;
    this.setState({ top });
  };

  render() {
    const { intro, about, skills, clients, contactTop, contactBottom } = this.props;
    const { top } = this.state;
    return (
      <React.Fragment>
        <section className="section hero margin-top-0">
          <Hero intro={intro} contact={contactTop} top={top} />
        </section>
        <section className="section about">
          <About about={about} />
        </section>
        <section className="section skills">
          <Skills skills={skills} />
        </section>
        <section className="section clients">
          <Clients clients={clients} top={top} />
        </section>
        <section className="contact-form-bottom">
          <ContactFormBottom contact={contactBottom} />
        </section>
      </React.Fragment>
    );
  }
}

MainPageTemplate.propTypes = {
  intro: PropTypes.shape({
    backgroundImage: PropTypes.string,
    items: PropTypes.array
  }),
  skills: PropTypes.shape({
    heading: PropTypes.string,
    image: PropTypes.string,
    items: PropTypes.array
  }),
  clients: PropTypes.shape({
    heading: PropTypes.string,
    backgroundImage: PropTypes.string,
    items: PropTypes.array
  }),
  about: PropTypes.shape({
    heading: PropTypes.string,
    image: PropTypes.string,
    text: PropTypes.string
  }),
  contactTop: PropTypes.shape({
    heading: PropTypes.string
  }),
  contactBottom: PropTypes.shape({
    heading: PropTypes.string
  })
};

MainPageTemplate.defaultProps = {
  intro: {
    image: '',
    items: []
  },
  about: {
    heading: '',
    image: '',
    text: ''
  },
  skills: {
    heading: '',
    image: '',
    items: []
  },
  clients: {
    heading: '',
    items: []
  },
  contactTop: {
    heading: ''
  },
  contactBottom: {
    heading: ''
  }
};

export default MainPageTemplate;
