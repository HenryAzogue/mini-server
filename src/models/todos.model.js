const db = require('../utils/database');

const { DataTypes } = require('sequelize');


const Todos = db.define( 'todos', {
  id: {
    primaryKey:    true,
    type:          DataTypes.INTEGER,
    autoIncrement: true,
    allowNull:     false
  },
  title: {
    type:         DataTypes.STRING(30),
    allowNull:    false
  },
  description: {
    type:         DataTypes.STRING(100)
  },
  isComplete: {
    type:         DataTypes.BOOLEAN,
    defaultValue: false,
    field:        'is_complete'//cambia el nombre del campo en la DB
  },
  id_user: {
    type:         DataTypes.INTEGER,
    allowNull:    false,
  }
});

module.exports = Todos;