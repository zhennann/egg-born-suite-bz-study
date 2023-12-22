const moduleInfo = module.info;
const resources = [
  {
    atomName: 'Videos',
    atomStaticKey: 'listVideo',
    atomRevision: 1,
    atomCategoryId: 'a-base:menu.List',
    resourceType: 'a-base:menu',
    resourceConfig: JSON.stringify({
      module: moduleInfo.relativeName,
      atomClassName: 'video',
      atomAction: 'read',
    }),
    resourceIcon: ':outline:data-list-outline',
    appKey: 'study-admin:appAdmin',
    resourceRoles: 'template.system',
  },
];
module.exports = resources;
