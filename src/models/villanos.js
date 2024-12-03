import { DataTypes } from 'sequelize';
import sequelize from '../config/db.js';

const Villanos = sequelize.define("villanos", {

    idVillanos: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        unique: true,
    },

    nombreVillanos: {
        type: DataTypes.STRING(200),
        allowNull: false,
        unique: true,
    },
    tituloVillanos: {
        type: DataTypes.STRING(200),
        allowNull: false,
        unique: true,
    }
    },
);

// Exporta el modelo para usarlo en otras partes del proyecto.
export default Villanos;