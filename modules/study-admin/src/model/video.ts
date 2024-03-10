import { Model } from '@cabloy/core';
import { BeanModelBase } from 'cabloy-module-api-a-database';
import { EntityVideo } from '../entity/video.js';

@Model({
  table: 'studyVideo',
  options: {
    disableDeleted: false,
  },
})
export class ModelVideo extends BeanModelBase<EntityVideo> {}
