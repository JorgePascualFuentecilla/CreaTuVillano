import monstruos from '../../models/Monstruos.js';
import villanos from '../../models/Villanos.js'
import BonificacionVillanos from '../../models/BonificacionVillanos.js';
import error from '../../helpers/errors.js';

const includes = {include: [BonificacionVillanos],};

async function getAll() {
    const users = await villanos.findAll(includes)
    return users;
}
async function getById(id) {
    const user = await villanos.findByPk(id, includes);
    return user;
}




export const functions = {
    getAll,
    getById,
   
}
export default functions;