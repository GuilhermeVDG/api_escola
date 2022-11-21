import User from '../models/user';

export default class Users {
  async store(data) {
    const response = await User.create(data);

    return response;
  }
}
