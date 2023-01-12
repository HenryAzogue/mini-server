//importar todos los modelos creados
const Users = require('./users.model');
const Todos = require('./todos.model');
const Categories = require('./categories.model');
const TodosCategories = require('./todos_categories.model');


const initModels = () =>{
  
  //segundo paso para relacionar
  //  hasOne    => para indicar que tiene un [relacion 1 a 1, sin claves foraneas]
  //  hasMany   => muchos  
  //  belongsTo => pertenece a [sabe que tiene la laave foranea]

  Todos.belongsTo(Users, {as: 'author', foreignKey: 'id_user'}); //una tarea pertenece a un usuario
  Users.hasMany(Todos, {as: 'task', foreignKey:'id_user'}); //Un usuario tiene muchos tareas

  //relacion M-M [categorias & tareas]= tabla pivote
  TodosCategories.belongsTo(Todos, {as: 'task', foreignKey:'id_todo'});
  Todos.hasMany(TodosCategories, {as: 'categories', foreignKey: 'id_todo'});

  TodosCategories.belongsTo(Categories, {as:'category', foreignKey: 'id_category'});
  Categories.hasMany(TodosCategories,{as:'task', foreignKey: 'id_category'});

};

module.exports = initModels;