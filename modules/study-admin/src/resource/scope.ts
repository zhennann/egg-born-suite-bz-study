import { BeanScopeBase, Scope, TypeModuleResource } from '@cabloy/core';
import { IModuleLocal } from './locals.js';
import { IModuleModel } from './models.js';
import { config, Errors, locales, constants } from '../config/index.js';

@Scope()
export class ScopeModuleStudyAdmin extends BeanScopeBase {}

export interface ScopeModuleStudyAdmin
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
    'study-admin': ScopeModuleStudyAdmin;
  }

  export interface IBeanScopeConfig {
    'study-admin': ReturnType<typeof config>;
  }
}
