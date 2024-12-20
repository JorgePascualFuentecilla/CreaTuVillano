const { Sequelize } = import('sequelize');
const sequelize = import('../database');

const Villanos = import('./Villanos');
const Monstruos = import('./Monstruos');
const AtributosMonstruos = import('./AtributosMonstruos');
const BonificacionVillanos = import('./BonificacionVillanos');
const Poderes = import('./Poderes');
const AtributosMonstruosHasMonstruos = import('./AtributosMonstruosHasMonstruos');
const BonificacionVillanosHasAtributosMonstruos = import('./BonificacionVillanosHasAtributosMonstruos');


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

module.exports = {
  Villanos,
  Monstruos,
  AtributosMonstruos,
  BonificacionVillanos,
  Poderes,
  AtributosMonstruosHasMonstruos,
  BonificacionVillanosHasAtributosMonstruos,
};
