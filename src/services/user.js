import User from '../models/user';

export default class Users {
  async store(data) {
    const response = await User.create(data);

    return response;
  }

  async index() {
    const response = await User.findAll();

    return response;
  }

  async find(filter) {
    const response = await User.findByPk(~~filter.id);

    return response;
  }
}
