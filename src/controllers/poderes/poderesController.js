import poderes from '../../models/poderes.js';
import error from '../../helpers/errors.js';
async function getAll() {
    const users = await poderes.findAll()
    return users;
}
async function getById(id) {
    const user = await poderes.findByPk(id);
    return user;
}

/*async function create(username, email, password) {
    const oldUser = await getByEmail(id);
    if(oldUser){
        throw new error.EMAIL_ALREADY_EXISTS;
    }
    const newUser = await poderes.create({
        username,
        email,
        password         
    });

    return newUser;
}*/


/*async function update(id, username, email, rol,password=null) {
    const user = await poderes.findByPk(id);

    user.username = username;
    user.email = email;
    user.rol = rol;
    if (password) {user.password=password}
   
    await user.save();
    return user;
}*/

/*async function remove(id) {
    const userToRemove = await poderes.findByPk(id);
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
