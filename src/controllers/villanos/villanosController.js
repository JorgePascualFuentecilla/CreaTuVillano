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

/*async function create(username, email, password) {
    const oldUser = await getByEmail(id);
    if(oldUser){
        throw new error.EMAIL_ALREADY_EXISTS;
    }
    const newUser = await villanos.create({
        username,
        email,
        password         
    });

    return newUser;
}*/


/*async function update(id, username, email, rol,password=null) {
    const user = await villanos.findByPk(id);

    user.username = username;
    user.email = email;
    user.rol = rol;
    if (password) {user.password=password}
   
    await user.save();
    return user;
}*/

/*async function remove(id) {
    const userToRemove = await villanos.findByPk(id);
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
