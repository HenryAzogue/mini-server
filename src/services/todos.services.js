const Todos = require('../models/todos.model');
const TodosCategoires = require('../models/todos_categories.model');
const Categories = require('../models/categories.model');

class TodoServices {

  static async getAll () {                            //
    try {
      const result = await Todos.findAll();
      return result;
    } catch (error) {
      throw error; 
    }
  }

  static async getById (id){                          //
    try {
      const result = await Todos.findByPk(id);
      return result;
    } catch (error) {
      throw error;
    }
  }

  static async create (todo) {                     //
    try {
      const result = await Todos.create(todo);
      return result;
    } catch (error) {
      throw error
    }
  }

  static async update (id, field) {               //
    try {
      const result = await Todos.update(field, { where: {id} });
      return result;
    } catch (error) {
      throw error;
    }
  }
  static async delete (id) {                     //
    try {
      const result = await Todos.destroy({ where: {id} });
      return result;
    } catch (error) {
      throw error;
    }
  }
//paso 1
  static async getWithCategories (id){
    try {
      const result = await Todos.findOne({
        where: {id},
        include: {
          model: TodosCategoires,
          as: 'categories',
          attributes: ['id'],
          include: {
            model: Categories,
            as: 'category'
          }
        }
      });
      return result;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = TodoServices;