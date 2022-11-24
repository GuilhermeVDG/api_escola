import UserServices from '../services/user';
import Handle from '../utils/handle';

export default class Users {
  constructor() {
    this.userServices = new UserServices();

    this.store = this.store.bind(this);
    this.detail = this.detail.bind(this);
  }

  async store(req, res) {
    try {
      const response = await this.userServices.store(req.body);

      return Handle.success(response, res);
    } catch (error) {
      return Handle.error(error, res);
    }
  }

  async detail(req, res) {
    try {
      const response = await this.userServices.detail(req.userId);

      return Handle.success(response, res);
    } catch (error) {
      return Handle.error(error, res);
    }
  }
}
