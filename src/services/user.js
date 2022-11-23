import User from '../models/user';

export default class Users {
  async store(data) {
    const { id, name, email } = await User.create(data);

    return {
      id,
      name,
      email,
    };
  }

  async detail(userId) {
    const { id, name, email } = await User.findByPk(~~userId);

    if (!id) throw new Error('NOT_FOUND');

    return {
      id,
      name,
      email,
    };
  }
}
