import { Router } from 'express';

export default class Routes {
  constructor() {
    this.routes = new Router();
  }

  setup() {
    return this.routes;
  }
}
