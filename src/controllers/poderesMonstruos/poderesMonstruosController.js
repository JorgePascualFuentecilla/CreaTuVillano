import { Monstruo, Poder, PoderesMonstruos } from '../../models/index.js';

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

        // Por hacer, esto ha de asignar mas de un poder aleatorio: const numAssignments = req.query.num || 100;
        // Generar asignaciones aleatorias
        const assignments = [];
        for (let i = 1; i < monstruoIds.length; i++) {
            const monstruoId = monstruoIds[i];

            const poderId = poderIds[Math.floor(Math.random() * poderIds.length)];
            assignments.push({ monstruos_idMonstruos: monstruoId, poderes_idPoderes: poderId });
        }
        // Insertar asignaciones
        await PoderesMonstruos.bulkCreate(assignments);
        res.json({ message: `¡Se insertaron ${assignments.length} relaciones!` });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Error al asignar poderes." });
    }
}
