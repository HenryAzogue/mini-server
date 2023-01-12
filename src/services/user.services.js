const Users = require('../models/users.model');//uso del modelo de usuario
const Todos = require('../models/todos.model');
//clase define el comportamiento del componente
//planos para replicar con comportamiento iguales
class UserServices {
  //metodos estaticos
  static async getAll () {                            //l
    try {
      const result = await Users.findAll();
      return result;
    } catch (error) {
      throw error; //lanzar el error
    }
  }

  static async getById (id){                         //l
    try {
      const result = await Users.findByPk(id);
      return result;
    } catch (error) {
      throw error;
    }
  }
//obtener una relacion
  static async getWithTasks (id) {                   //l
    try {
      const result = await Users.findOne({
        where:     {id},
        attributes: {
          exclude: ['password']
        },
        include: {//pertenece al modelo de Todos
          model:  Todos,
          as:     'task',
          attributes: ['title'],
          //include: se puede agregar otro include
        }
      });
      return result;   
    } catch (error) {
      throw error;
    }
  }

  static async create (user) {                     //l
    try {
      const result = await Users.create(user);
      return result;
    } catch (error) {
      throw error
    }
  }

  static async update (id, field) {
    try {
      const result = await Users.update(field, {where: {id}});
      return result;
    } catch (error) {
      throw error;
    }
  }
  static async delete (id) {
    try {
      const result = await Users.destroy({where: {id}});
      return result;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = UserServices;