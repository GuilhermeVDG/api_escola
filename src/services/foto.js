/* eslint-disable camelcase */
import Foto from '../models/foto';
import Student from '../models/student';
import Handle from '../utils/handle';

export default class Fotos {
  async store(student_id, originalname, filename) {
    const studentExists = await Student.findByPk(~~student_id);

    if (!studentExists) throw Handle.exception('STUDENT_NOT_EXIST');

    const response = await Foto.create({ originalname, filename, student_id });

    return response;
  }

  async delete(foto_id) {
    const foto = await Foto.findByPk(foto_id);

    if (!foto) throw Handle.exception('FOTO_NOT_FOUND');

    await foto.destroy();

    return { ok: true };
  }
}
