/* eslint-disable */
import Helmet from 'react-helmet';

export const onRenderBody = ({ setHeadComponents, setHtmlAttributes }) => {
  const helmet = Helmet.renderStatic();
  console.log(helmet.link);
  setHtmlAttributes(helmet.htmlAttributes.toComponent());
  setHeadComponents([
    helmet.title.toComponent(),
    helmet.link.toComponent(),
    helmet.meta.toComponent()
  ]);
};
