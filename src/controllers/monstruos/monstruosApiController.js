import monstruosController from "./monstruosController.js";

async function getAll(req, res) {
    try {
        const monstruos = await monstruosController.getAll();
        res.json(monstruos);
    } catch (error) {
        console.error("Error fetching all monsters:", error);
        res.status(500).json({ error: "An error occurred while fetching monsters." });
    }
}

async function getById(req, res) {
    try {
        const id = req.params.id;
        const monstruo = await monstruosController.getById(id);
        if (!monstruo) {
            return res.status(404).json({ error: "Monster not found." });
        }
        res.json(monstruo);
    } catch (error) {
        console.error(`Error fetching monster with ID ${req.params.id}:`, error);
        res.status(500).json({ error: "An error occurred while fetching the monster." });
    }
}

export default {
    getAll,
    getById,
};
