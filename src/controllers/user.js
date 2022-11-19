import UserServices from '../services/user';

export default class User {
  constructor() {
    this.userServices = new UserServices();

    this.store = this.store.bind(this);
  }

  async store(req, res) {
    const response = await this.userServices.store();

    return res.json(response);
  }
}
