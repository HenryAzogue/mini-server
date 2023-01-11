//instancia para la conexion de DB
const db = require('../utils/database');

//tipos de datos de sequilize 
const { DataTypes } = require('sequelize');

//definir el modelo de usuarios
//los modelos se definen con MAYUSCULA

//nombre de la tabla  y atributos de la tabla({})
const Users = db.define('users', {
  id: {
    primaryKey:    true,
    type:          DataTypes.INTEGER,
    autoIncrement: true,
    allowNull:     false
  },
  username: {
    type:         DataTypes.STRING(15),
    alowwNull:    false,
    unique:       true // parametro que no se repita
  },
  email: {
    type:         DataTypes.STRING(30),
    allowNull:    false,
    unique:       true,
    validate: { //validacion para comprovar si unico el email
      isEmail:    true 
    }
  },
  password: {
    type:         DataTypes.STRING(12),
    allowNull:    false
  }
});

module.exports = Users;