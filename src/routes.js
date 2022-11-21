import { Router } from 'express';

import UserRoutes from './routes/user';
import StudentRoutes from './routes/student';

export default class Routes {
  constructor() {
    this.routes = new Router();

    this.userRoutes = new UserRoutes();
    this.studentRoutes = new StudentRoutes();
  }

  setup() {
    this.routes.use('/', this.userRoutes.setup());
    this.routes.use('/students', this.studentRoutes.setup());

    return this.routes;
  }
}
