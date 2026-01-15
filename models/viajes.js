import { DataTypes } from 'sequelize';
import db from '../config/db.js';

const Viaje = db.define('Viaje', {
  titulo: {
    type: DataTypes.STRING,
    allowNull: false
  },
  precio: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  fecha_ida: {
    type: DataTypes.DATEONLY,
    allowNull: false
  },
  fecha_vuelta: {
    type: DataTypes.DATEONLY,
    allowNull: false
  },
  imagen: {
    type: DataTypes.STRING,
    allowNull: false
  },
  descripcion: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  disponibles: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  slug: {
    type: DataTypes.STRING,
    allowNull: false
  }
});

export default Viaje;
