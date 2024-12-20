const { Sequelize } = require('sequelize');
const sequelize = require('../database');

const Villanos = require('./Villanos');
const Monstruos = require('./Monstruos');
const AtributosMonstruos = require('./AtributosMonstruos');
const BonificacionVillanos = require('./BonificacionVillanos');
const Poderes = require('./Poderes');
const AtributosMonstruosHasMonstruos = require('./AtributosMonstruosHasMonstruos');
const BonificacionVillanosHasAtributosMonstruos = require('./BonificacionVillanosHasAtributosMonstruos');


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
