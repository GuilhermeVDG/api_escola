import Student from '../models/student';
import Handle from '../utils/handle';

export default class Students {
  async store(data) {
    const {
      id, name, surname, age,
    } = await Student.create(data);

    if (!id) return Handle.exception('NOT_FOUND');

    return {
      id,
      name,
      surname,
      age,
    };
  }
}
