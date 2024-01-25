import { BeanModelBase, Model } from '@cabloy/core';

@Model({
  table: 'studyVideo',
  options: {
    disableDeleted: false,
    cacheName: { module: moduleInfo.relativeName, name: 'modelVideo' },
  },
})
export class ModelVideo extends BeanModelBase {}
