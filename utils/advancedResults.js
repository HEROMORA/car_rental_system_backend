'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const lodash_1 = require('lodash');

class AdvancedResults {
  constructor(model, query, defaultWhereOptions, defaultOptions) {
    this.page = 1;
    this.limit = 10;
    this.model = model;
    this.query = query;
    this.defaultWhereOptions = defaultWhereOptions;
    this.defaultOptions = defaultOptions;
    this.options = {};
  }

  filter(allowedFields = []) {
    let fields = lodash_1.pick(this.query, allowedFields);
    this.options.where = Object.assign(
      Object.assign({}, this.options.where),
      fields
    );
    return this;
  }

  paginate() {
    if (!isNaN(this.query['page'])) {
      this.page = parseInt(this.query['page']);
    }
    if (!isNaN(this.query['limit'])) {
      const limit = parseInt(this.query['limit']);
      this.limit = limit > 30 ? 30 : limit;
    }
    const pageProperties = {
      limit: this.limit,
      offset: (this.page - 1) * this.limit,
    };
    this.options = Object.assign(
      Object.assign({}, this.options),
      pageProperties
    );
    return this;
  }

  async execute() {
    this.options = Object.assign(
      Object.assign({}, this.options),
      this.defaultOptions
    );
    this.options.where = Object.assign(
      Object.assign({}, this.options.where),
      this.defaultWhereOptions
    );
    const results = await this.model.findAndCountAll(this.options);
    const pagination = this.generatePagination(results['count']);
    return {
      rows: results['rows'],
      pagination,
    };
  }

  generatePagination(count) {
    const pagination = {
      page: this.page,
      limit: this.limit,
      total: Math.ceil(count / this.limit),
    };
    const current = (this.page - 1) * this.limit;
    if (current >= this.limit) {
      pagination.prev = this.page - 1;
    }
    if (current + this.limit < count) {
      pagination.next = this.page + 1;
    }
    return pagination;
  }
}

module.exports = AdvancedResults;
//# sourceMappingURL=advancedResults.js.map
