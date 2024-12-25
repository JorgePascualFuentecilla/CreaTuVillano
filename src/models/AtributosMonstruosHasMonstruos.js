import { DataTypes } from 'sequelize';
import sequelize from '../config/db.js';
import AtributosMonstruos from './AtributosMonstruos.js';
import Monstruos from './Monstruos.js';

const AtributosMonstruosHasMonstruos = sequelize.define(
  'AtributosMonstruosHasMonstruos',
  {
    AtributosMonstruos_idAtributo: {
      type: DataTypes.INTEGER,
      references: {
        model: AtributosMonstruos,
        key: 'idAtributo',
      },
    },
    Monstruos_idMonstruos: {
      type: DataTypes.INTEGER,
      references: {
        model: Monstruos,
        key: 'idMonstruos',
      },
    },
    Valor: {
      type: DataTypes.STRING(45),
      allowNull: false,
    },
  },
  {
    tableName: 'AtributosMonstruos_has_Monstruos',
    timestamps: false,
  }
);

export default AtributosMonstruosHasMonstruos;
