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
  atomName: 'StudyAdmin',
  atomStaticKey: 'appAdmin',
  atomRevision: 0,
  atomCategoryId: 'AppCategoryManagement',
  description: '',
  appIcon: 'study-icon::study',
  appIsolate: false,
  content: JSON.stringify(content),
  resourceRoles: 'authenticated',
  appSorting: 0,
};
export default app;
