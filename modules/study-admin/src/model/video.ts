import { BeanModelBase, Model } from '@cabloy/core';

@Model({
  table: 'studyVideo',
  options: {
    disableDeleted: false,
  },
})
export class ModelVideo extends BeanModelBase {}
