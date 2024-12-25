import { Monstruo, Poder } from "../../models/index.js";

async function getAll() {
    try {
        const monsters = await Monstruo.findAll({
            include: {
                model: Poder,
                through: { attributes: [] }, // Evita incluir columnas innecesarias de la tabla intermedia
            },
        });
        return monsters;
    } catch (error) {
        console.error("Error fetching all monsters:", error);
        throw new Error("Failed to fetch all monsters");
    }
}

async function getById(id) {
    try {
        const monster = await Monstruo.findByPk(id, {
            include: {
                model: Poder,
                through: { attributes: [] },
            },
        });
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
