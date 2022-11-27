import FotoServices from '../services/foto';
import Handle from '../utils/handle';

export default class Foto {
  constructor() {
    this.fotoServices = new FotoServices();

    this.store = this.store.bind(this);
  }

  async store(req, res) {
    const { originalname, filename } = req.file;
    // eslint-disable-next-line camelcase
    const { student_id } = req.body;

    try {
      const response = await this.fotoServices.store(student_id, { originalname, filename });

      return Handle.success(response, res);
    } catch (error) {
      return Handle.error(error, res);
    }
  }
}
