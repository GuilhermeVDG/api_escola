import { Router } from 'express';

import StudentController from '../controllers/student';
import studentSchemas from '../schemas/student';
import SchemaValidator from '../middlewares/validator';

export default class User {
  constructor() {
    this.routes = new Router();
    this.studentController = new StudentController();
  }

  setup() {
    this.routes.post('/store', SchemaValidator.validate(studentSchemas.store), this.studentController.store);
    this.routes.get('/index', this.studentController.index);
    this.routes.get('/:id', SchemaValidator.validate(studentSchemas.detail), this.studentController.detail);
    this.routes.put('/:id', SchemaValidator.validate(studentSchemas.update), this.studentController.update);
    this.routes.delete('/:id', SchemaValidator.validate(studentSchemas.delete), this.studentController.delete);

    return this.routes;
  }
}
