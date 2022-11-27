/* eslint-disable camelcase */
import Foto from '../models/foto';

export default class Fotos {
  async store(student_id, originalname, filename) {
    const response = await Foto.create({ originalname, filename, student_id });

    return response;
  }
}
