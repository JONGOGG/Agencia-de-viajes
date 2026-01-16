import { DataTypes } from 'sequelize';
import db from '../config/db.js';

const Testimoniales = db.define('testimoniales', { // <-- el nombre exacto de la tabla
  nombre: {
    type: DataTypes.STRING,
    allowNull: false
  },
  correo: {
    type: DataTypes.STRING,
    allowNull: false
  },
  mensaje: {
    type: DataTypes.TEXT,
    allowNull: false
  }
}, {
  tableName: 'testimoniales', // fuerza usar este nombre
  timestamps: false
});

export default Testimoniales;
