const { DataTypes } = import('sequelize');
const sequelize = import('../database');
const BonificacionVillanos = import('./BonificacionVillanos');
const AtributosMonstruos = import('./AtributosMonstruos');

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