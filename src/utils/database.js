const { Sequelize } = require('sequelize');
require('dotenv').config();
//crear una instancia con parametros de configuracion de base de datos
//objeto de configuracion ==> son credenciales de DB
const db = new Sequelize({
  database: process.env.DB_NAME,
  username: process.env.DB_USER,
  host:     process.env.DB_HOST, //127.0.0.1
  port:     process.env.DB_PORT,
  password: process.env.DB_PASSWORD,     //tu constraseña
  dialect:  'postgres',  //define la DB que estamos usando
  logging: false
});

module.exports = db;

//CONSFIGUACION NECESARIA