const remark = require('remark');
const remarkHTML = require('remark-html');

const traverseArray = arr => {
  arr.forEach(x => traverse(x));
};

const traverseObject = obj => {
  Object.keys(obj).forEach(key => {
    if (key === 'description' || key === 'text' || key === 'quote') {
      const content = remark()
        .use(remarkHTML)
        .processSync(obj[key])
        .toString();
      obj[key] = content;
    } else {
      traverse(obj[key]);
    }
  });
};

function traverse(x) {
  if (Array.isArray(x)) {
    traverseArray(x);
  } else if (typeof x === 'object' && x !== null) {
    traverseObject(x);
  } else {
    return null;
  }
}

exports.onCreateNode = ({ node }) => {
  if (node.frontmatter) {
    traverse(node.frontmatter);
  }
};
