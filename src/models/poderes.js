import { DataTypes } from 'sequelize';

export default (sequelize) => {
  return sequelize.define('poderes', {
    idPoderes: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    nombrePoderes: {
      type: DataTypes.STRING(200),
      allowNull: false,
      unique: true,
    },
  });
};
const { DataTypes } = require('sequelize');
const sequelize = require('../database');
const Monstruos = require('./Monstruos');

const Poderes = sequelize.define('Poderes', {
  idPoderes: {
    type: DataTypes.INTEGER,
    primaryKey: true
  },
  NombrePoderes: {
    type: DataTypes.STRING(200),
    unique: true,
    allowNull: false
  },
  Monstruos_idMonstruos: {
    type: DataTypes.INTEGER,
    references: {
      model: Monstruos,
      key: 'idMonstruos'
    }
  }
}, {
  tableName: 'Poderes',
  timestamps: false
});

module.exports = Poderes;