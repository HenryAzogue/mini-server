//import express
const express    = require('express');
const db         = require('./utils/database');
const initModels = require('./models/init.model');
const Users      = require('./models/users.model');
const userRoutes = require('./routes/users.routes')

//crear instancia de express
const app = express();
app.use(express.json());

const PORT = 8000;


//probando la conexion a DB
db.authenticate()
.then(()=>console.log('autenticacion exitosa'))
.catch((error) => console.log(error));

//ejecutar la funcion 
initModels();
//vamos a usar el metodo sync para sincronizar la DB
db.sync({ force: false })//alter: modifica las tablas que ya estan creada cuando modificamos las tablas
//devuelve una promesa
  .then(()=> console.log('Base de datos sincronizada'))
  .catch((error) => console.log(error));


app.get('/', (req, res)=>{
  res.status(200).json({message: "Bienvenido al servidor"});
});

app.use('/api/v1', userRoutes);
//definir las rutas de los endpoints(ep)
//todas las consultas de usuarios [ localhost:8000/users ]
//todo lo relacionado con tareas [ localhost:8000/todos ]
//GET => users
app.get('/users', async (req, res)=>{
  try {//obtener el resultado de consultar a todos los usuarios de la DB
    const result = await Users.findAll();//select * from users;
    res.status(200).json(result);//respondemos con un estado y un json del resultado
  
  } catch (error) {
    console.log(error);
  }
})
//obtener un usuario sabiendo su id
app.get('/users/:id', async (req, res)=> {
  try {
    const { id } = req.params;
    const result = await Users.findByPk(id);
    res.status(200).json(result);

  } catch (error) {
    console.log(error);
  }
});
//obtener un usuario por username
app.get('/users/username/:username', async (req, res)=> {
  try {
    const { username } = req.params;
    const result = await Users.findOne({ where: {username} });//select * from users where  username= laura
    res.status(200).json(result);
    
  } catch (error) {
    console.log(error);
  }
});

//crear un usuario
app.post('/users', async (req, res) => {
  try {
    const user   = req.body;
    const result = await Users.create(user);
    res.status(201).json(result);
    
  } catch (error) {
    res.status(400).json(error.message);
    console.log(error);
  }
}); 

//actualizar un usuario, solo podemos cambiar la contraseña
app.put('/users/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const field = req.body;
    const result = await Users.update(field, {
      where: { id }
    });
    res.status(200).json(result);

  } catch (error) {
    res.status(400).json(error.message);
  }
});

//eliminar un usuario => id
//validar si el usuario no tenga tareas
//si tiene tarea responder "no se puede"
//si no tiene ---> elimar
app.delete('/users/:id', async (req, res) =>{
  try {
    const { id } = req.params;
    const result = await Users.destroy({
      where: {id}
    });
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json(error.message);
  }
})


//----------------------TODOS--------------------------------
//Obtener todas las tareas
app.get('/todos', async (req, res) => {
  try {
    const result = await Todos.findAll();
    res.status(200).json(result);
  } catch (error) {
    console.log(error);
  }
})

//Obtener una tarea por su id
app.get('/todos/:id', async (req, res) => {
  try {
    const {id} = req.params;
    const result = await Todos.findByPk(id);
    res.status(200).json(result);
  } catch (error) {
    console.log(error);
  }
})

//Crear un nuevo todo
app.post('/todos', async (req, res) => {
  try {
    const todo = req.body;
    const result = await Todos.create(todo);
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json(error.message);
    console.log(error);
  }
})

//Actualizar un todo
app.put('/todos/:id', async (req, res) => {
  try {
    const { is_complete } = req.params;
    const field   = req.body;
    const result  = await Todos.update(field, {
      where: { is_complete }
    });
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json(error.message);
  }
})

//Eliminar una tarea
app.delete('/todos', async (req, res)=>{
  try {
    const { id } = req.params;
    const result = await Todos.destroy({
      where:  { id }
    });
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json(error.message);
  }
})



app.listen(PORT, ()=>{
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
