const { DataTypes } = require('sequelize');
const sequelize = require('../database');
const AtributosMonstruos = require('./AtributosMonstruos');
const Monstruos = require('./Monstruos');

const AtributosMonstruosHasMonstruos = sequelize.define('AtributosMonstruosHasMonstruos', {
  AtributosMonstruos_idAtributo: {
    type: DataTypes.INTEGER,
    references: {
      model: AtributosMonstruos,
      key: 'idAtributo'
    }
  },
  Monstruos_idMonstruos: {
    type: DataTypes.INTEGER,
    references: {
      model: Monstruos,
      key: 'idMonstruos'
    }
  },
  Valor: {
    type: DataTypes.STRING(45),
    allowNull: false
  }
}, {
  tableName: 'AtributosMonstruos_has_Monstruos',
  timestamps: false
});

module.exports = AtributosMonstruosHasMonstruos;