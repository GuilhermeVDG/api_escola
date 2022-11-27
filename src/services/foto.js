import Foto from '../models/foto';

export default class Fotos {
  async store(studentId, data) {
    // eslint-disable-next-line max-len
    const response = await Foto.create({ student_id: studentId, original_name: data.originalname, filename: data.filename });

    return response;
  }
}
