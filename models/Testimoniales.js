import { DataTypes } from 'sequelize';
import db from '../config/db.js';

const Testimoniales = db.define('Testimoniales', {
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
  tableName: 'testimoniales',  // ✅ nombre exacto de la tabla en minúscula
  timestamps: false
});

export default Testimoniales;
