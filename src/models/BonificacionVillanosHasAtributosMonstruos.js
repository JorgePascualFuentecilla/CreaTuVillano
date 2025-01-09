import { DataTypes } from 'sequelize';
import sequelize from '../config/db.js';
import BonificacionVillanos from './BonificacionVillanos.js';
import AtributosMonstruos from './AtributosMonstruos.js';


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

export default BonificacionVillanosHasAtributosMonstruos;