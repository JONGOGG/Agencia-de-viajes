import { DataTypes } from 'sequelize';
import db from '../config/db.js';

const Testimonial = db.define('testimoniales', {
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
});

export default Testimonial;
