import { DataTypes } from 'sequelize';
import sequelize from '../config/db.js';

const Monstruos = sequelize.define("monstruos", {

    idMonstruos: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        unique: true,
    },

    nombreMonstruos: {
        type: DataTypes.STRING(200),
        allowNull: false,
        unique: true,
    }
    },
);

// Exporta el modelo para usarlo en otras partes del proyecto.
export default Monstruos;