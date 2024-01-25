const resources = [
  {
    atomName: 'StudyCategoryManagement',
    atomStaticKey: 'studyCategoryManagement',
    atomRevision: 1,
    atomCategoryId: 'a-base:menu.StudyResources',
    resourceType: 'a-base:menu',
    resourceConfig: JSON.stringify({
      actionPath: '/a/baseadmin/category/tree?module=study-admin&atomClassName=video',
    }),
    resourceIcon: '::folder-open',
    appKey: 'study-admin:appAdmin',
    resourceRoles: 'template.system',
    resourceSorting: 1,
  },
  {
    atomName: 'Videos',
    atomStaticKey: 'listVideo',
    atomRevision: 2,
    atomCategoryId: 'a-base:menu.StudyResources',
    resourceType: 'a-base:menu',
    resourceConfig: JSON.stringify({
      module: moduleInfo.relativeName,
      atomClassName: 'video',
      atomAction: 'read',
    }),
    resourceIcon: ':outline:data-list-outline',
    appKey: 'study-admin:appAdmin',
    resourceRoles: 'template.system',
    resourceSorting: 2,
  },
];
module.exports = resources;
