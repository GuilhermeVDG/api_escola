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

  async update(studentId, changes) {
    const student = await Student.findByPk(~~studentId);

    if (!student) return Handle.exception('STUDENT_NOT_FOUND');

    if (changes.email) {
      const emailExists = Student.findOne({
        where: {
          email: changes.email,
        },
      });

      if (emailExists) return Handle.exception('EMAIL_MUST_BEEN_UNIQUE');
    }

    const {
      name, surname, email, age,
    } = await student.update(changes);

    return {
      name,
      surname,
      email,
      age,
    };
  }

  async delete(studentId) {
    const student = await Student.findByPk(~~studentId);

    if (!student) return Handle.exception('STUDENT_NOT_FOUND');

    await student.destroy();

    return { ok: true };
  }
}
