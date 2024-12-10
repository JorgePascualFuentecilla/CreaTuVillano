import { DataTypes } from 'sequelize';

export default (sequelize) => {
  return sequelize.define('monstruos', {
    idMonstruos: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    nombreMonstruos: {
      type: DataTypes.STRING(200),
      allowNull: false,
      unique: true,
    },
  });
};
