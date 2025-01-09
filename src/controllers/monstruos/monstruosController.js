import { Monstruos, Poderes, AtributosMonstruos} from "../../models/index.js";


const includes = {include: [Poderes,AtributosMonstruos],};
async function getAll() {
    try {
        const monsters = await Monstruos.findAll(includes);
        return monsters;
    } catch (error) {
        console.error("Error fetching all monsters:", error);
        throw new Error("Failed to fetch all monsters");
    }
}

async function getById(id) {
    try {
        const monster = await Monstruos.findByPk(id, includes);
        if (!monster) {
            throw new Error(`Monster with ID ${id} not found`);
        }
        return monster;
    } catch (error) {
        console.error(`Error fetching monster with ID ${id}:`, error);
        throw new Error("Failed to fetch monster by ID");
    }
}

export default {
    getAll,
    getById,
};
