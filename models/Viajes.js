const Viajes = db.define('Viajes', {  // nombre del modelo JS está bien
  titulo: { type: DataTypes.STRING, allowNull: false },
  precio: { type: DataTypes.INTEGER, allowNull: false },
  fecha_ida: { type: DataTypes.DATEONLY, allowNull: false },
  fecha_vuelta: { type: DataTypes.DATEONLY, allowNull: false },
  imagen: { type: DataTypes.STRING, allowNull: false },
  descripcion: { type: DataTypes.TEXT, allowNull: false },
  disponibles: { type: DataTypes.INTEGER, allowNull: false },
  slug: { type: DataTypes.STRING, allowNull: false }
}, {
  tableName: 'viajes',  // ← todo en minúscula, como en la DB
  timestamps: false
});
