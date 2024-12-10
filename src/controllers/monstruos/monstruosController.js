import { Monstruo,Poder } from '../../models/index.js';
const includes = {include: {
    model: Poder,
    through: { attributes: [] }, 
  }}
async function getAll() {
    const users = await Monstruo.findAll(includes)
    return users;
}
async function getById(id) {
    const user = await Monstruo.findByPk(id,includes);
    return user;
}




export const functions = {
    getAll,
    getById,
    
}

export default functions;
