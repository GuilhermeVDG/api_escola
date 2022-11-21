import StudentServices from '../services/student';

export default class Students {
  constructor() {
    this.studentServices = new StudentServices();

    this.store = this.store.bind(this);
  }

  async store(req, res) {
    const response = await this.studentServices.store({
      name: 'Guilherme',
      surname: 'Vanderley',
      email: 'guilherme@gmail.com',
      age: 20,
    });

    return res.json(response);
  }
}
