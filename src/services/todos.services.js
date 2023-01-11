const Categories = require('../models/categories.model');
const Todos = require('../models/todos.model');

class TodoServices {

  static async getAll () {
    try {
      const result = await Todos.findAll();
      return result;
    } catch (error) {
      throw error; 
    }
  }

  static async getById (id){
    try {
      const result = await Todos.findByPk(id);
      return result;
    } catch (error) {
      throw error;
    }
  }
  //obtener una relacion Todo --> Categories
  //traer tarea con categorias
  static async getWithCategory (id) {
    try {
      const result = await Todos.findOne({
        where:     {id},
        attributes: ['title', 'description', 'is_complete', 'user_id'],
        include: {//pertenece al modelo de Categoies
          model:  Categories,
          as:     'task',
          attributes: ['name'],
          //include: se puede agregar otro include
        }
      });
      return result;   
    } catch (error) {
      throw error;
    }
  }


  static async create (user) {
    try {
      const result = await Todos.create(user);
      return result;
    } catch (error) {
      throw error
    }
  }

  static async update (id, field) {
    try {
      const result = await Todos.update(field, {where: {id}});
      return result;
    } catch (error) {
      throw error;
    }
  }
  static async delete (id) {
    try {
      const result = await Todos.destroy({where: {id}});
      return result;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = TodoServices;