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
