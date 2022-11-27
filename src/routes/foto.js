import { Router } from 'express';

import FotoController from '../controllers/foto';
// import fotoSchema from '../schemas/foto';
// import SchemaValidator from '../middlewares/validator';

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
