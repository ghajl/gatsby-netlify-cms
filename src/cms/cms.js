import CMS from 'netlify-cms';
import '../styles/all.sass';

import MainPagePreview from './preview-templates/MainPagePreview';

CMS.registerPreviewTemplate('main', MainPagePreview);
