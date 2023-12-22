// const moduleInfo = module.info;
const info = {
  menu: {},
  home: {},
  mine: {},
};
const content = {
  presets: {
    anonymous: {
      mobile: info,
      pc: info,
    },
    authenticated: {
      mobile: info,
      pc: info,
    },
  },
};
const app = {
  atomName: 'Admin',
  atomStaticKey: 'appAdmin',
  atomRevision: 0,
  atomCategoryId: 'AppCategoryManagement',
  description: '',
  appIcon: '::radio-button-unchecked',
  appIsolate: false,
  content: JSON.stringify(content),
  resourceRoles: 'authenticated',
  appSorting: 0,
};
module.exports = app;
