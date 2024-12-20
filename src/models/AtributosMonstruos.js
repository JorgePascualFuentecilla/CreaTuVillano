const { DataTypes } = require('sequelize');
const sequelize = require('../database');

const AtributosMonstruos = sequelize.define('AtributosMonstruos', {
  idAtributo: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  Nombre: {
    type: DataTypes.STRING(45),
    unique: true,
    allowNull: false
  }
}, {
  tableName: 'AtributosMonstruos',
  timestamps: false
});

module.exports = AtributosMonstruos;