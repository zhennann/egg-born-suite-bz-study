import { BeanBase } from '@cabloy/core';

const __atomClassVideo = {
  module: __ThisModule__,
  atomClassName: 'video',
};

export class VersionInit extends BeanBase {
  async run(options) {
    // rights
    await this._rights();
    // categories
    await this._categories();
  }

  async _rights() {
    const roleRights = [
      { roleName: 'authenticated', action: 'create' },
      { roleName: 'authenticated', action: 'read', scopeNames: 0 },
      { roleName: 'authenticated', action: 'write', scopeNames: 0 },
      { roleName: 'authenticated', action: 'delete', scopeNames: 0 },
      { roleName: 'authenticated', action: 'clone', scopeNames: 0 },
      { roleName: 'authenticated', action: 'deleteBulk' },
      { roleName: 'authenticated', action: 'exportBulk' },
      { roleName: 'system', action: 'read', scopeNames: 'authenticated' },
      { roleName: 'system', action: 'write', scopeNames: 'authenticated' },
      { roleName: 'system', action: 'delete', scopeNames: 'authenticated' },
      { roleName: 'system', action: 'clone', scopeNames: 'authenticated' },
    ];
    await this.ctx.bean.role.addRoleRightBatch({ atomClassName: 'video', roleRights });
  }

  async _categories() {
    const categories = [
      { categoryName: '产品开发', categoryIdParent: 0, categorySorting: 1 },
      { categoryName: '产品设计', categoryIdParent: '产品开发', categorySorting: 1 },
      { categoryName: '前端开发', categoryIdParent: '产品开发', categorySorting: 2 },
      { categoryName: '后端开发', categoryIdParent: '产品开发', categorySorting: 3 },
      { categoryName: '销售技巧', categoryIdParent: 0, categorySorting: 2 },
      { categoryName: '职场提升', categoryIdParent: 0, categorySorting: 3 },
    ];
    const categoryIds = {};
    for (const item of categories) {
      // add
      const categoryId = await this.ctx.bean.category.add({
        atomClass: __atomClassVideo,
        data: {
          categoryName: item.categoryName,
          categorySorting: item.categorySorting,
          categoryIdParent: item.categoryIdParent ? categoryIds[item.categoryIdParent] : 0,
        },
      });
      categoryIds[item.categoryName] = categoryId;
    }
  }
}
