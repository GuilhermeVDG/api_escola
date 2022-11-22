import SessionServices from '../services/session';

export default class Session {
  constructor() {
    this.sessionServices = new SessionServices();

    this.login = this.login.bind(this);
  }

  async login(req, res) {
    try {
      const response = await this.sessionServices.login(req.body);

      return res.json(response);
    } catch (error) {
      return res.status(400).json(error);
    }
  }
}
