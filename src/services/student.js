import Student from '../models/student';

export default class Students {
  async store(data) {
    const response = await Student.create(data);
    return response;
  }
}
