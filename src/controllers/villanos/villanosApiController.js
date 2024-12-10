
import villanosController from "./villanosController.js"
async function getAll(req, res) {
    const villanos = await villanosController.getAll()
    res.json (villanos);
}
async function getById(req,res) {
    const id = req.params.id;
    const user = await villanosController.getById(id);
    res.json ( user);
}




export const functions = {
    getAll,
    getById,
   
}
export default functions