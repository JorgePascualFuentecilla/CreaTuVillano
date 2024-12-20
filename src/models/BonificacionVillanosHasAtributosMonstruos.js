const { DataTypes } = require('sequelize');
const sequelize = require('../database');
const BonificacionVillanos = require('./BonificacionVillanos');
const AtributosMonstruos = require('./AtributosMonstruos');

const BonificacionVillanosHasAtributosMonstruos = sequelize.define('BonificacionVillanosHasAtributosMonstruos', {
  BonificacionVillanos_idBonificacionVillanos: {
    type: DataTypes.INTEGER,
    references: {
      model: BonificacionVillanos,
      key: 'idBonificacionVillanos'
    }
  },
  BonificacionVillanos_Villanos_idVillanos: {
    type: DataTypes.INTEGER,
    references: {
      model: BonificacionVillanos,
      key: 'Villanos_idVillanos'
    }
  },
  AtributosMonstruos_idAtributo: {
    type: DataTypes.INTEGER,
    references: {
      model: AtributosMonstruos,
      key: 'idAtributo'
    }
  }
}, {
  tableName: 'BonificacionVillanos_has_AtributosMonstruos',
  timestamps: false
});

module.exports = BonificacionVillanosHasAtributosMonstruos;