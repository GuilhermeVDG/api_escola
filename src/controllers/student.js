import StudentServices from '../services/student';

import Handle from '../utils/handle';

export default class Students {
  constructor() {
    this.studentServices = new StudentServices();

    this.store = this.store.bind(this);
    this.index = this.index.bind(this);
    this.detail = this.detail.bind(this);
    this.update = this.update.bind(this);
    this.delete = this.delete.bind(this);
  }

  async store(req, res) {
    try {
      const response = await this.studentServices.store(req.body);

      return Handle.success(response, res);
    } catch (error) {
      return Handle.error(error, res);
    }
  }

  async index(req, res) {
    try {
      const response = await this.studentServices.index();

      return Handle.success(response, res);
    } catch (error) {
      return Handle.error(error, res);
    }
  }

  async detail(req, res) {
    try {
      const response = await this.studentServices.detail(req.filter.id);

      return Handle.success(response, res);
    } catch (error) {
      return Handle.error(error, res);
    }
  }

  async update(req, res) {
    try {
      const response = await this.studentServices.update(req.userId, req.data);

      return Handle.success(response, res);
    } catch (error) {
      return Handle.error(error, res);
    }
  }

  async delete(req, res) {
    try {
      const response = await this.studentServices.delete(req.filter.id);

      return Handle.success(response, res);
    } catch (error) {
      return Handle.error(error, res);
    }
  }
}
