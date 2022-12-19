/* eslint-disable camelcase */
import FotoServices from '../services/foto';
import Handle from '../utils/handle';

export default class Foto {
  constructor() {
    this.fotoServices = new FotoServices();

    this.store = this.store.bind(this);
    this.delete = this.delete.bind(this);
  }

  async store(req, res) {
    const { originalname, filename, student_id } = req.body;

    try {
      const response = await this.fotoServices.store(student_id, originalname, filename);

      return res.json(response);
    } catch (error) {
      return Handle.error(error, res);
    }
  }

  async delete(req, res) {
    try {
      const response = await this.fotoServices.delete(req.params.id);

      return Handle.success(response, res);
    } catch (error) {
      return Handle.error(error, res);
    }
  }
}
