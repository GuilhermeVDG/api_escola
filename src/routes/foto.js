import { Router } from 'express';

import FotoController from '../controllers/foto';
import uploadMiddleware from '../middlewares/foto';

export default class Foto {
  constructor() {
    this.routes = new Router();
    this.fotoController = new FotoController();
  }

  setup() {
    this.routes.post('/', uploadMiddleware, this.fotoController.store);
    this.routes.delete('/:id', this.fotoController.delete);

    return this.routes;
  }
}
