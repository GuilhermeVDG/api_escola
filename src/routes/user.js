import { Router } from 'express';

import UserController from '../controllers/user';
import AuthMiddleware from '../middlewares/auth';

export default class User {
  constructor() {
    this.routes = new Router();
    this.userController = new UserController();
  }

  setup() {
    this.routes.post('/store', this.userController.store);

    this.routes.use(AuthMiddleware);

    this.routes.get('/index', this.userController.index);
    this.routes.get('/find/:id', this.userController.find);

    return this.routes;
  }
}
