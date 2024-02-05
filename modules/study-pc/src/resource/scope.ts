import { BeanScopeBase, Scope, TypeModuleResource } from '@cabloy/core';
import { IModuleLocal } from './locals.js';
import { IModuleModel } from './models.js';
import { config, Errors, locales, constants } from '../config/index.js';

@Scope()
export class ScopeModuleStudyPc extends BeanScopeBase {}

export interface ScopeModuleStudyPc
  extends TypeModuleResource<
    IModuleLocal,
    IModuleModel,
    typeof config,
    typeof Errors,
    typeof locales,
    typeof constants
  > {}

declare module '@cabloy/core' {
  export interface IBeanScopeRecord {
    'study-pc': ScopeModuleStudyPc;
  }

  export interface IBeanScopeConfig {
    'study-pc': ReturnType<typeof config>;
  }
}
