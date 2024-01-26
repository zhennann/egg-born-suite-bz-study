const atomVideo = require('./bean/atom.video.js');
const versionManager = require('./bean/version.manager.js');

const beans = {
  // atom
  'atom.video': {
    bean: atomVideo,
  },
  // version
  'version.manager': {
    bean: versionManager,
  },
};
export default beans;
