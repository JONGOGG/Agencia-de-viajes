import { DataTypes } from 'sequelize';
import db from '../config/db.js';

const Testimoniales = db.define('testimoniales', {
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
  tableName: 'Testimoniales', // ✅ Cambia a mayúscula para coincidir con la BD
  timestamps: false
});

export default Testimoniales;