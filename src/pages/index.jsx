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
          backgroundImage
          items {
            text
          }
        }
        about {
          heading
          image
          text
        }
        skills {
          heading
          image
          items {
            text
          }
        }
        clients {
          heading
          backgroundImage
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
