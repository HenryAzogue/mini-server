const db = require('../utils/database');
const { DataTypes } = require('sequelize');
const Categories = require('./categories.model');
const Todos = require('./todos.model');

const TodosCategories = db.define('todos_categories', {
  id: {
    primaryKey:    true,
    type:          DataTypes.INTEGER,
    autoIncrement: true,
    allowNull:     false,
    unique:        true
  },
  id_todo: {
    type:         DataTypes.INTEGER,
    allowNull:    false,
  },
  id_category: {
    type:         DataTypes.INTEGER,
    allowNull:    false,
  }
},
{
  timestamps: false
});

module.exports = TodosCategories;