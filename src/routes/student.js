import { Router } from 'express';

import StudentController from '../controllers/student';
import AuthMiddleware from '../middlewares/auth';

export default class User {
  constructor() {
    this.routes = new Router();
    this.studentController = new StudentController();
  }

  setup() {
    this.routes.use(AuthMiddleware);

    this.routes.post('/store', this.studentController.store);

    return this.routes;
  }
}
