/*import { Monstruo, Poder, PoderesMonstruos } from '../../models/index.js';

export async function asignarPoderes(req, res) {
    try {
        // Obtener todos los IDs
        const monstruos = await Monstruo.findAll({ attributes: ['idMonstruos'] });
        const poderes = await Poder.findAll({ attributes: ['idPoderes'] });

        if (!monstruos.length || !poderes.length) {
            return res.status(400).json({ error: "No hay suficientes monstruos o poderes." });
        }

        const monstruoIds = monstruos.map(m => m.idMonstruos);
        const poderIds = poderes.map(p => p.idPoderes);

        // Número de asignaciones que quieres realizar
        const numAssignments = req.query.num || 100;

        // Generar asignaciones aleatorias
        let createdCount = 0;
        for (let i = 0; i < numAssignments; i++) {
            const monstruoId = monstruoIds[Math.floor(Math.random() * monstruoIds.length)];
            const poderId = poderIds[Math.floor(Math.random() * poderIds.length)];

            // Usar findOrCreate para evitar duplicados
            const [relation, created] = await PoderesMonstruos.findOrCreate({
                where: { monstruos_idMonstruos: monstruoId, poderes_idPoderes: poderId },
            });

            if (created) createdCount++;
        }

        res.json({ message: `¡Se insertaron ${createdCount} nuevas relaciones!` });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Error al asignar poderes." });
    }
}*/