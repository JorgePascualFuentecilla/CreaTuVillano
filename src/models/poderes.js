import { DataTypes } from 'sequelize';
import sequelize from '../config/db.js';

const Poderes = sequelize.define("poderes", {

    idPoderes: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        unique: true,
    },

    nombrePoderes: {
        type: DataTypes.STRING(200),
        allowNull: false,
        unique: true,
    },
    },
);

// Exporta el modelo para usarlo en otras partes del proyecto.
export default Poderes;