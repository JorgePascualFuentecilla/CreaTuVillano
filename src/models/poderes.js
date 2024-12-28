import { DataTypes } from 'sequelize';
import sequelize from '../config/db.js';
import Monstruos from './Monstruos.js';

const Poderes = sequelize.define('Poderes', {
  idPoderes: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false,
    autoIncrement: true
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

export default Poderes;