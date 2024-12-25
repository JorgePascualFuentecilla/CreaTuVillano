import { DataTypes } from 'sequelize';
import sequelize from '../config/db.js';

const AtributosMonstruos = sequelize.define(
  'AtributosMonstruos',
  {
    idAtributo: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    Nombre: {
      type: DataTypes.STRING(45),
      unique: true,
      allowNull: false,
    },
  },
  {
    tableName: 'AtributosMonstruos',
    timestamps: false,
  }
);

export default AtributosMonstruos;
