import Villanos from './Villanos.js';
import Monstruos from './Monstruos.js';
import AtributosMonstruos from './AtributosMonstruos.js';
import BonificacionVillanos from './BonificacionVillanos.js';
import Poderes from './Poderes.js';
import AtributosMonstruosHasMonstruos from './AtributosMonstruosHasMonstruos.js';
import BonificacionVillanosHasAtributosMonstruos from './BonificacionVillanosHasAtributosMonstruos.js';


Villanos.hasMany(Monstruos, { foreignKey: 'idVillanoMonstruo' });
Monstruos.belongsTo(Villanos, { foreignKey: 'idVillanoMonstruo' });

Monstruos.hasMany(Poderes, { foreignKey: 'Monstruos_idMonstruos' });
Poderes.belongsTo(Monstruos, { foreignKey: 'Monstruos_idMonstruos' });

AtributosMonstruos.belongsToMany(Monstruos, {
  through: AtributosMonstruosHasMonstruos,
  foreignKey: 'AtributosMonstruos_idAtributo',
});
Monstruos.belongsToMany(AtributosMonstruos, {
  through: AtributosMonstruosHasMonstruos,
  foreignKey: 'Monstruos_idMonstruos',
});

Villanos.hasMany(BonificacionVillanos, { foreignKey: 'Villanos_idVillanos' });
BonificacionVillanos.belongsTo(Villanos, { foreignKey: 'Villanos_idVillanos' });

BonificacionVillanos.belongsToMany(AtributosMonstruos, {
  through: BonificacionVillanosHasAtributosMonstruos,
  foreignKey: 'BonificacionVillanos_idBonificacionVillanos',
  otherKey: 'AtributosMonstruos_idAtributo',
});
AtributosMonstruos.belongsToMany(BonificacionVillanos, {
  through: BonificacionVillanosHasAtributosMonstruos,
  foreignKey: 'AtributosMonstruos_idAtributo',
  otherKey: 'BonificacionVillanos_idBonificacionVillanos',
});

export {
  Villanos,
  Monstruos,
  AtributosMonstruos,
  BonificacionVillanos,
  Poderes,
  AtributosMonstruosHasMonstruos,
  BonificacionVillanosHasAtributosMonstruos,
};
