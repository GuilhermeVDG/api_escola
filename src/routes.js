import { Router } from 'express';

import UserRoutes from './routes/user';
import StudentRoutes from './routes/student';
import SessionRoutes from './routes/session';
import FotoRoutes from './routes/foto';
import AuthMiddleware from './middlewares/auth';

export default class Routes {
  constructor() {
    this.routes = new Router();

    this.userRoutes = new UserRoutes();
    this.studentRoutes = new StudentRoutes();
    this.sessionRoutes = new SessionRoutes();
    this.fotoRoutes = new FotoRoutes();
  }

  setup() {
    this.routes.use('/session', this.sessionRoutes.setup());
    this.routes.use('/', this.userRoutes.setup());
    this.routes.use('/students', AuthMiddleware, this.studentRoutes.setup());
    this.routes.use('/foto', AuthMiddleware, this.fotoRoutes.setup());

    return this.routes;
  }
}
