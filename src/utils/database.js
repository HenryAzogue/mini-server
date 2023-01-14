const { Sequelize } = require('sequelize');
//crear una instancia con parametros de configuracion de base de datos
//objeto de configuracion ==> son credenciales de DB
const db = new Sequelize({
  database: 'todoapp',
  username: 'postgres',
  host:     'localhost', //127.0.0.1
  port:     '5432',
  password: 'root',     //tu constraseña
  dialect:  'postgres',  //define la DB que estamos usando
});

module.exports = db;

//CONSFIGUACION NECESARIA