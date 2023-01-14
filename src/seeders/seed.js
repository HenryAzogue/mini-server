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
  {title: 'fotos', description: 'capturar foros del picnick', id_user: 1},
  {title: 'conducir', description: 'ir de paseo a la casa de campo', id_user: 2},
  {title: 'modelo', description: 'llevar prendas extras', id_user: 3},
  {title: 'molestar', id_user: 2},
  {title: 'besar', description: 'besos apacionados con el fotografo', id_user: 3},
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
  {id_category: 1, id_todo: 1},
  {id_category: 2, id_todo: 1},
  {id_category: 4, id_todo: 1},
  {id_category: 1, id_todo: 2},
  {id_category: 7, id_todo: 2},
  {id_category: 10, id_todo: 2},
  {id_category: 3, id_todo: 2},
  {id_category: 5, id_todo: 3},
  {id_category: 6, id_todo: 3},
  {id_category: 1, id_todo: 4},
  {id_category: 3, id_todo: 4}
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