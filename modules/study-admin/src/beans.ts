import atomVideo from './bean/atom.video.js';
import versionManager from './bean/version.manager.js';

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
