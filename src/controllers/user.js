import UserServices from '../services/user';

export default class Users {
  constructor() {
    this.userServices = new UserServices();

    this.store = this.store.bind(this);
  }

  async store(req, res) {
    try {
      const response = await this.userServices.store({
        name: 'Guilherme',
        email: 'dev@super.com',
        password: '123123',
      });

      return res.json(response);
    } catch (error) {
      return res.status(400).json({ errors: error.errors.map((err) => err.message) });
    }
  }
}
