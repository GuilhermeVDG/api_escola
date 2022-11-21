import Sequelize from 'sequelize';
import dataBaseConfig from '../config/database';
import Student from '../models/student';
import User from '../models/user';

const models = [Student, User];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(dataBaseConfig);

    models.map((model) => model.init(this.connection));
  }
}

export default new Database();
