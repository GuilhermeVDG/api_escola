import express from 'express';
import cors from 'cors';

import Routes from './routes';

export default class App {
  constructor() {
    this.app = express();
    this.routes = new Routes();

    this.app.use(cors());
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());

    this.app.use(this.routes.setup());
  }

  startServer() {
    this.app.listen(3215, () => {
      console.log('Server started in port 3215');
    });
  }
}
