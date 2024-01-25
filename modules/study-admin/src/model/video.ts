module.exports = class Video extends module.meta.class.ModelCache {
  constructor() {
    super({
      table: 'studyVideo',
      options: {
        disableDeleted: false,
        cacheName: { module: moduleInfo.relativeName, name: 'modelVideo' },
      },
    });
  }
};
