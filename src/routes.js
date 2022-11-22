import { Router } from 'express';

import UserRoutes from './routes/user';
import StudentRoutes from './routes/student';
import SessionRoutes from './routes/session';

export default class Routes {
  constructor() {
    this.routes = new Router();

    this.userRoutes = new UserRoutes();
    this.studentRoutes = new StudentRoutes();
    this.sessionRoutes = new SessionRoutes();
  }

  setup() {
    this.routes.use('/', this.userRoutes.setup());
    this.routes.use('/students', this.studentRoutes.setup());
    this.routes.use('/session', this.sessionRoutes.setup());

    return this.routes;
  }
}
