
import monstruosController from "./monstruosController.js"
async function getAll(req, res) {
    const monstruos = await monstruosController.getAll()
    res.json (monstruos);
}
async function getById(req,res) {
    const id = req.params.id;
    const user = await monstruosController.getById(id);
    res.json ( user);
}




export const functions = {
    getAll,
    getById,
   
}
export default functions