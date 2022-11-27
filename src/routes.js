import { Router } from 'express';
import multer from 'multer';

import UserRoutes from './routes/user';
import StudentRoutes from './routes/student';
import SessionRoutes from './routes/session';
import FotoRoutes from './routes/foto';
import uploadConfig from './config/multer';

export default class Routes {
  constructor() {
    this.routes = new Router();
    this.upload = multer(uploadConfig.upload('./uploads'));

    this.userRoutes = new UserRoutes();
    this.studentRoutes = new StudentRoutes();
    this.sessionRoutes = new SessionRoutes();
    this.fotoRoutes = new FotoRoutes();
  }

  setup() {
    this.routes.use('/session', this.sessionRoutes.setup());
    this.routes.use('/', this.userRoutes.setup());
    this.routes.use('/students', this.studentRoutes.setup());
    this.routes.use('/foto', this.upload.single('file'), this.fotoRoutes.setup());

    return this.routes;
  }
}
