import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import MainPageTemplate from '../templates/main-page';

const MainPage = props => {
  const { data } = props;
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <MainPageTemplate
        intro={frontmatter.intro}
        about={frontmatter.about}
        skills={frontmatter.skills}
        clients={frontmatter.clients}
        contactBottom={frontmatter.contactBottom}
      />
    </Layout>
  );
};

MainPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object
    })
  }).isRequired
};

export default MainPage;

export const mainPageQuery = graphql`
  query MainPage {
    markdownRemark {
      frontmatter {
        intro {
          heading
          backgroundImage {
            childImageSharp {
              fluid(maxWidth: 2048, quality: 80, cropFocus: CENTER) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          items {
            text
          }
        }
        about {
          heading
          image {
            childImageSharp {
              fluid(maxWidth: 2048, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          text
        }
        skills {
          heading
          image {
            childImageSharp {
              fluid(maxWidth: 2048, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          items {
            text
          }
        }
        clients {
          heading
          backgroundImage {
            childImageSharp {
              fluid(maxWidth: 2048, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          description
          items {
            text
          }
        }
        contactBottom {
          heading
        }
      }
    }
  }
`;
