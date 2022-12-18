import Student from '../models/student';
import Foto from '../models/foto';
import Handle from '../utils/handle';

export default class Students {
  async store(data) {
    const {
      id, email, name, surname, age,
    } = await Student.create(data);

    if (!id) throw Handle.exception('NOT_FOUND');

    return {
      id,
      email,
      name,
      surname,
      age,
    };
  }

  async index() {
    const students = await Student.findAll({
      attributes: ['id', 'name', 'surname', 'email', 'age'],
      order: [['id', 'DESC'], [Foto, 'id', 'DESC']],
      include: {
        model: Foto,
        attributes: ['url'],
      },
    });

    if (!students) throw Handle.exception('NO_STUDENTS');

    return students;
  }

  async detail(studentId) {
    const student = await Student.findByPk(~~studentId, {
      attributes: ['id', 'name', 'surname', 'email', 'age'],
      order: [['id', 'DESC'], [Foto, 'id', 'DESC']],
      include: {
        model: Foto,
        attributes: ['url'],
      },
    });

    if (!student) throw Handle.exception('STUDENT_NOT_FOUND');

    return student;
  }

  async update(studentId, changes) {
    const student = await Student.findByPk(~~studentId);

    if (!student) throw Handle.exception('STUDENT_NOT_FOUND');

    if (changes.email) {
      const emailExists = Student.findOne({
        where: {
          email: changes.email,
        },
      });

      if (emailExists) throw Handle.exception('EMAIL_MUST_BEEN_UNIQUE');
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

    if (!student) throw Handle.exception('STUDENT_NOT_FOUND');

    await student.destroy();

    return { ok: true };
  }
}
