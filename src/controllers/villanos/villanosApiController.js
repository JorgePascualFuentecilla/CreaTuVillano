import villanosController from "./villanosController.js";

async function getAll(req, res) {
    try {
        const villanos = await villanosController.getAll();
        res.status(200).json(villanos );
    } catch (error) {
        console.error("Error fetching all villains:", error);
        res.status(500).json({error: "Failed to fetch villains" });
    }
}

async function getById(req, res) {
    try {
        const id = req.params.id;
        const villano = await villanosController.getById(id);

        if (!villano) {
            return res.status(404).json({ success: false, error: `Villain with ID ${id} not found` });
        }

        res.status(200).json(villano);
    } catch (error) {
        console.error(`Error fetching villain with ID ${id}:`, error);
        res.status(500).json({error: "Failed to fetch villain" });
    }
}

export default {
    getAll,
    getById,
};
