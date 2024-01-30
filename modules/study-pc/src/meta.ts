import atomClasses from './meta/atomClass/atomClasses.js';
import schemas from './meta/validation/schemas.js';
import keywords from './meta/validation/keywords.js';
import staticApps from './meta/static/apps.js';
import staticDicts from './meta/static/dicts.js';
import staticLayouts from './meta/static/layouts.js';
import staticResources from './meta/static/resources.js';
export const meta = {
  base: {
    atoms: atomClasses,
    statics: {
      'a-app.app': {
        items: staticApps,
      },
      'a-dict.dict': {
        items: staticDicts,
      },
      'a-baselayout.layout': {
        items: staticLayouts,
      },
      'a-base.resource': {
        items: staticResources,
      },
    },
  },
  validation: {
    validators: {},
    keywords,
    schemas,
  },
  index: {
    indexes: {},
  },
};
