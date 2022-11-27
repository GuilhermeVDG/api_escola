import FotoServices from '../services/foto';
import Handle from '../utils/handle';

export default class Foto {
  constructor() {
    this.fotoServices = new FotoServices();

    this.store = this.store.bind(this);
  }

  async store(req, res) {
    try {
      const response = await this.fotoServices.store();

      return Handle.success(req.file, res);
    } catch (error) {
      return Handle.error(error, res);
    }
  }
}
