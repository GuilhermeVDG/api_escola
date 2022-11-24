import SessionServices from '../services/session';
import Handle from '../utils/handle';

export default class Session {
  constructor() {
    this.sessionServices = new SessionServices();

    this.login = this.login.bind(this);
  }

  async login(req, res) {
    try {
      const response = await this.sessionServices.login(req.body);

      return Handle.success(response, res);
    } catch (error) {
      return Handle.error(error, res);
    }
  }
}
