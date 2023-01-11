const db = require('../utils/database');

const { DataTypes } = require('sequelize');
const Users = require('./users.model');

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
  userId: {
    type:         DataTypes.INTEGER,
    allowNull:    false,
    field:        'user_id',
    references: {//primer paso para relacionar tablas
      model:    Users,
      key:      'id'
    }
  }
});

module.exports = Todos;