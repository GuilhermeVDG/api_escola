import { Router } from 'express';

import StudentController from '../controllers/student';
import AuthMiddleware from '../middlewares/auth';
import studentSchemas from '../schemas/student';
import SchemaValidator from '../middlewares/validator';

export default class User {
  constructor() {
    this.routes = new Router();
    this.studentController = new StudentController();
  }

  setup() {
    this.routes.use(AuthMiddleware);

    this.routes.post('/store', SchemaValidator.validate(studentSchemas.store), this.studentController.store);
    this.routes.get('/index', this.studentController.index);
    this.routes.get('/detail/:id', SchemaValidator.validate(studentSchemas.detail), this.studentController.detail);

    return this.routes;
  }
}
