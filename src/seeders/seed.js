const db = require('../utils/database'); //traer la DB
const Users = require('../models/users.model'); // traer el modelo
const Todos = require('../models/todos.model');
const Categories = require('../models/categories.model');
const TodosCategories = require('../models/todos_categories.model');

const users = [
  {username: 'Henry', email: 'henry@gmail.com', password:'123456'},
  {username: 'Laura', email: 'laura@gmail.com', password:'12sd236'},
  {username: 'Kiernan', email: 'kiernan@gmail.com', password:'1dswr456'}
];

const todos = [
  {title: 'fotos', description: 'capturar foros del picnick', userId: 1},
  {title: 'conducir', description: 'ir de paseo a la casa de campo', userId: 2},
  {title: 'modelo', description: 'llevar prendas extras', userId: 3},
  {title: 'molestar', userId: 2},
  {title: 'besar', description: 'besos apacionados con el fotografo', userId: 3},
];

const categories = [
  {name: 'personal'}, //1
  {name: 'codear'},//2
  {name: 'meditar'},//3
  {name: 'ejercicios'},//4
  {name: 'pintura'},//5
  {name: 'dibujo'},//6
  {name: 'covers'},//7
  {name: 'lectura'},//8
  {name: 'cocina'},//9
  {name: 'entretenimiento'},//10
];

const todosCategories = [
  {idCategory: 1, idTodo: 1},
  {idCategory: 2, idTodo: 1},
  {idCategory: 4, idTodo: 1},
  {idCategory: 1, idTodo: 2},
  {idCategory: 7, idTodo: 2},
  {idCategory: 10, idTodo: 2},
  {idCategory: 3, idTodo: 2},
  {idCategory: 5, idTodo: 3},
  {idCategory: 6, idTodo: 3},
  {idCategory: 1, idTodo: 4},
  {idCategory: 3, idTodo: 4}
];

//sincronizar la DB
//metodos :: [ create, findOne, findDByPK, update, destroy]
db.sync({force: true})
  .then(()=>{
    console.log("Iniciando con el evento picnic");
    users.forEach((user) => Users.create(user));//insertar informacion a la tabla

    setTimeout(()=>{//esperar un tiempo para que se ejecute el Todo
      todos.forEach((todo) => Todos.create(todo));//dentro tiene un campo con el userId, que viene  de la tabla users
    },100)//recomendado hacer esto

    setTimeout(()=>{
      categories.forEach((category) => Categories.create(category));
    },300)

    setTimeout(()=>{
      todosCategories.forEach((tc) => TodosCategories.create(tc));
    },500)
  })
  .catch((error) => console.log(error));