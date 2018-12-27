import React from 'react';
import PropTypes from 'prop-types';
import remark from 'remark';
import remarkHTML from 'remark-html';
import MainPageTemplate from '../../templates/main-page';

const renderMarkdown = content =>
  remark()
    .use(remarkHTML)
    .processSync(content)
    .toString();

const MainPagePreview = ({ entry, getAsset }) => {
  const entryIntroItems = entry.getIn(['data', 'intro', 'items']);
  const introItems = entryIntroItems ? entryIntroItems.toJS() : [];

  const entrySkillsItems = entry.getIn(['data', 'skills', 'items']);
  const skillsItems = entrySkillsItems ? entrySkillsItems.toJS() : [];

  const entryClientsItems = entry.getIn(['data', 'clients', 'items']);
  const clientsItems = entryClientsItems ? entryClientsItems.toJS() : [];

  return (
    <MainPageTemplate
      intro={{
        heading: entry.getIn(['data', 'intro', 'heading']),
        backgroundImage: getAsset(entry.getIn(['data', 'intro', 'backgroundImage'])),
        items: introItems
      }}
      about={{
        heading: entry.getIn(['data', 'about', 'heading']),
        image: getAsset(entry.getIn(['data', 'about', 'image'])),
        text: renderMarkdown(entry.getIn(['data', 'about', 'text']))
      }}
      contactBottom={{
        heading: entry.getIn(['data', 'contactBottom', 'heading'])
      }}
      skills={{
        heading: entry.getIn(['data', 'skills', 'heading']),
        image: getAsset(entry.getIn(['data', 'skills', 'image'])),
        items: skillsItems
      }}
      clients={{
        heading: entry.getIn(['data', 'clients', 'heading']),
        backgroundImage: getAsset(entry.getIn(['data', 'clients', 'backgroundImage'])),
        description: entry.getIn(['data', 'clients', 'description']),
        items: clientsItems
      }}
    />
  );
};

MainPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func
  }).isRequired,
  getAsset: PropTypes.func.isRequired
};

export default MainPagePreview;
