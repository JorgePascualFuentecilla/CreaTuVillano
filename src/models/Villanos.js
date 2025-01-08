import { DataTypes } from 'sequelize';
import sequelize from '../config/db.js';


const Villanos = sequelize.define('Villanos', {
  idVillanos: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  Nombre: {
    type: DataTypes.STRING(200),
    unique: true,
    allowNull: false
  },
  Titulo: {
    type: DataTypes.STRING(200),
    unique: true,
    allowNull: false
  }
}, {
  tableName: 'Villanos',
  timestamps: false
});

export default Villanos;