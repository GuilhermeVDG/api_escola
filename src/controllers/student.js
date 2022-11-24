import StudentServices from '../services/student';

import Handle from '../utils/handle';

export default class Students {
  constructor() {
    this.studentServices = new StudentServices();

    this.store = this.store.bind(this);
  }

  async store(req, res) {
    try {
      const response = await this.studentServices.store(req.body);

      return Handle.success(response, res);
    } catch (error) {
      return Handle.error(error, res);
    }
  }
}
