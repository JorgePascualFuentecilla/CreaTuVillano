import { DataTypes } from 'sequelize';

export default (sequelize) => {
  return sequelize.define('poderesMonstruos', {
    monstruos_idMonstruos: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
    },
    poderes_idPoderes: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
    },
  });
};
