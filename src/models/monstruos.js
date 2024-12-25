import { DataTypes } from 'sequelize';
import sequelize from '../config/db.js';
import Villanos from './Villanos.js';

const Monstruos = sequelize.define('Monstruos', {
  idMonstruos: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  Nombre: {
    type: DataTypes.STRING(200),
    unique: true,
    allowNull: false
  },
  idVillanoMonstruo: {
    type: DataTypes.INTEGER,
    references: {
      model: Villanos,
      key: 'idVillanos'
    }
  }
}, {
  tableName: 'Monstruos',
  timestamps: false
});

export default Monstruos;