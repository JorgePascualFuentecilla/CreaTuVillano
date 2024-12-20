const { DataTypes } = import('sequelize');
const sequelize = import('../database');
const Villanos = import('./Villanos');

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

module.exports = Monstruos;