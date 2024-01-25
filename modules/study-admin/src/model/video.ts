import { BeanModelBase, Model } from '@cabloy/core';

@Model({
  table: 'studyVideo',
  options: {
    disableDeleted: false,
    cacheName: { name: 'modelVideo' },
  },
})
export class ModelVideo extends BeanModelBase {}
