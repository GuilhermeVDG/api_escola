import express from 'express';
import cors from 'cors';

export default class App {
  constructor() {
    this.app = express();
    this.app.use(cors);
  }

  startServer() {
    this.app.listen(1987, () => {
      console.log('Server started in port 1987');
    });
  }
}
