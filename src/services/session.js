import jwt from 'jsonwebtoken';
import User from '../models/user';
import authConfig from '../config/auth';

export default class Session {
  async login(data) {
    const user = await User.findOne({
      where: { email: data.email },
    });

    if (!user) throw new Error('INVALID_EMAIL');

    if (!(await user.checkPassowrd(data.password))) throw new Error('INVALID_PASSWORD');

    const { id, name, email } = user;

    const token = jwt.sign({ id, email }, authConfig.secret, {
      expiresIn: authConfig.expiresIn,
    });

    return {
      token,
      user: {
        name,
        email,
      },
    };
  }
}
