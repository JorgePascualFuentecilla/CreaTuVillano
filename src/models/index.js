import sequelize from '../config/db.js';
import MonstruoModel from './monstruos.js';
import PoderModel from './poderes.js';
import PoderesMonstruosModel from './poderesMonstruos.js';


// Modelos
export const Monstruo = MonstruoModel(sequelize);
export const Poder = PoderModel(sequelize);
export const PoderesMonstruos = PoderesMonstruosModel(sequelize);

// Relaciones
Monstruo.belongsToMany(Poder, {
  through: PoderesMonstruos,
  foreignKey: 'monstruos_idMonstruos',
});
Poder.belongsToMany(Monstruo, {
  through: PoderesMonstruos,
  foreignKey: 'poderes_idPoderes',
});

export default sequelize;
