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

  async index() {
    const students = await Student.findAll();

    if (!students) return Handle.exception('NO_STUDENTS');

    return students;
  }

  async detail(studentId) {
    const student = await Student.findByPk(~~studentId);

    if (!student) return Handle.exception('STUDENT_NOT_FOUND');

    const {
      name, surname, email, age,
    } = student;

    return {
      name,
      surname,
      email,
      age,
    };
  }
}
