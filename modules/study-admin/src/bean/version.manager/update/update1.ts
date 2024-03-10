import { BeanBase } from '@cabloy/core';

export class VersionUpdate extends BeanBase {
  async run(_options) {
    // create table: studyVideo
    await this.bean.model.createTable('studyVideo', function (table) {
      table.basicFields();
      table.atomId();
      table.description();
    });
  }
}
