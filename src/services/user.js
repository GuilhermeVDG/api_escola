import User from '../models/user';

import Handle from '../utils/handle';

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

    if (!id) throw Handle.exception('NOT_FOUND');

    return {
      id,
      name,
      email,
    };
  }

  async update(userId, changes) {
    const user = await User.findByPk(userId);

    if (!user) throw Handle.exception('NOT_FOUND');

    if (changes.password && !(await user.checkPassowrd(changes.oldPassword))) {
      return Handle.exception('PASSWORD_WRONG');
    }

    if (changes.email && (changes.email !== user.email)) {
      const userExists = await User.findOne({
        where: { email: changes.email },
      });

      if (userExists && (~~userExists.email !== ~~changes.email)) throw Handle.exception('EMAIL_IS_BEEN_USED');
    }

    const { id, name, email } = await user.update(changes);

    return {
      id,
      name,
      email,
    };
  }

  async delete(userId) {
    const user = await User.findByPk(userId);

    if (!user) throw Handle.exception('NOT_FOUND');

    await user.destroy();

    return { ok: true };
  }
}
