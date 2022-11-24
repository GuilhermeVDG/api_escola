import { Router } from 'express';

import SessionController from '../controllers/session';
import sessionSchema from '../schemas/session';
import SchemaValidator from '../middlewares/validator';

export default class Session {
  constructor() {
    this.routes = new Router();
    this.sessionController = new SessionController();
  }

  setup() {
    this.routes.post('/', SchemaValidator.validate(sessionSchema.login), this.sessionController.login);

    return this.routes;
  }
}
