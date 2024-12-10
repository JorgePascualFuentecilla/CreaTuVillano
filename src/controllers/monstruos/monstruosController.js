import { Monstruo,Poder } from '../../models/index.js';
const includes = {include: {
    model: Poder, // Incluir el modelo Poder
    through: { attributes: [] }, // Excluir la tabla intermedia
  }}
async function getAll() {
    const users = await Monstruo.findAll(includes)
    return users;
}
async function getById(id) {
    const user = await Monstruo.findByPk(id,includes);
    return user;
}

/*async function create(username, email, password) {
    const oldUser = await getByEmail(id);
    if(oldUser){
        throw new error.EMAIL_ALREADY_EXISTS;
    }
    const newUser = await monstruos.create({
        username,
        email,
        password         
    });

    return newUser;
}*/


/*async function update(id, username, email, rol,password=null) {
    const user = await monstruos.findByPk(id);

    user.username = username;
    user.email = email;
    user.rol = rol;
    if (password) {user.password=password}
   
    await user.save();
    return user;
}*/

/*async function remove(id) {
    const userToRemove = await monstruos.findByPk(id);
    await userToRemove.destroy();
    return userToRemove;
}*/


export const functions = {
    getAll,
    getById,
    //create,
    //update,
    //remove
}

export default functions;
