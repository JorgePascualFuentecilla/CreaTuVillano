import monstruos from '../../models/monstruos.js';
import villanos from '../../models/villanos.js'
import error from '../../helpers/errors.js';
async function getAll() {
    const users = await villanos.findAll()
    return users;
}
async function getById(id) {
    const user = await villanos.findByPk(id);
    return user;
}




export const functions = {
    getAll,
    getById,
   
}
export default functions;
