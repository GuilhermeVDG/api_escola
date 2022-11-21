import UserServices from '../services/user';

export default class Users {
  constructor() {
    this.userServices = new UserServices();

    this.store = this.store.bind(this);
  }

  async store(req, res) {
    const response = await this.userServices.store({
      name: 'Guilherme',
      email: 'dev@super.com',
      password: '123123',
    });

    return res.json(response);
  }
}
