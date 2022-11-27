import { Router } from 'express';

import FotoController from '../controllers/foto';

export default class Foto {
  constructor() {
    this.routes = new Router();
    this.fotoController = new FotoController();
  }

  setup() {
    this.routes.post('/', this.fotoController.store);

    return this.routes;
  }
}
