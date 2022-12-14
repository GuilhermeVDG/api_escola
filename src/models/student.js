import Sequelize, { Model } from 'sequelize';

export default class Student extends Model {
  static init(sequelize) {
    super.init({
      name: Sequelize.STRING,
      surname: Sequelize.STRING,
      email: Sequelize.STRING,
      age: Sequelize.INTEGER,
    }, {
      sequelize,
    });
    return this;
  }

  static associate(models) {
    this.hasMany(models.Foto, { foreignKey: 'student_id' });
  }
}
