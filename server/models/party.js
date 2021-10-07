'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Party extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Party.init({
    type: DataTypes.STRING,
    name: DataTypes.STRING,
    biography: DataTypes.TEXT,
    balance: DataTypes.FLOAT,
    creditLimit: DataTypes.FLOAT,
    isActive: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Party',
  });
  return Party;
};