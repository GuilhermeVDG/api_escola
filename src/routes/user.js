import { Router } from 'express';

import UserController from '../controllers/user';
import AuthMiddleware from '../middlewares/auth';
import userSchemas from '../schemas/user';
import SchemaValidator from '../middlewares/validator';

export default class User {
  constructor() {
    this.routes = new Router();
    this.userController = new UserController();
  }

  setup() {
    this.routes.post('/store', SchemaValidator.validate(userSchemas.store), this.userController.store);

    this.routes.get('/detail', AuthMiddleware, this.userController.detail);
    this.routes.put('/update', AuthMiddleware, SchemaValidator.validate(userSchemas.update), this.userController.update);
    this.routes.delete('/delete', AuthMiddleware, this.userController.delete);

    return this.routes;
  }
}
