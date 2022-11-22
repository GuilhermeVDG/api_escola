import { Router } from 'express';

import UserController from '../controllers/user';

export default class User {
  constructor() {
    this.routes = new Router();
    this.userController = new UserController();
  }

  setup() {
    this.routes.post('/store', this.userController.store);
    this.routes.get('/index', this.userController.index);

    return this.routes;
  }
}
