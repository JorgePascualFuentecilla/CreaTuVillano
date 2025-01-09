import { DataTypes } from 'sequelize';
import sequelize from '../config/db.js';
import Villanos from './Villanos.js';


const BonificacionVillanos = sequelize.define('BonificacionVillanos', {
  idBonificacionVillanos: {
    type: DataTypes.INTEGER,
    primaryKey: true
  },
  Villanos_idVillanos: {
    type: DataTypes.INTEGER,
    references: {
      model: Villanos,
      key: 'idVillanos'
    }
  },
  NombreBonificacion: {
    type: DataTypes.STRING(200),
    unique: true,
    allowNull: false
  },
  Valor: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
}, {
  tableName: 'BonificacionVillanos',
  timestamps: false
});

export default BonificacionVillanos;