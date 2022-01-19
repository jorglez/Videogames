const { UUIDV4 } = require('sequelize');
const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('genres', {
    id: { type: DataTypes.UUIDV4, default: UUIDV4, primaryKey:true },
    name: { type: DataTypes.STRING, allowNull: false }
  });
};
