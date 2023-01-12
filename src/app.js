//import express
const express    = require('express');
const db         = require('./utils/database');
const initModels = require('./models/init.model');
const Users      = require('./models/users.model');
const userRoutes = require('./routes/users.routes');
const todoRoutes = require('./routes/todos.routes');

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
app.use('/api/v1', todoRoutes);
//definir las rutas de los endpoints(ep)
//todas las consultas de usuarios [ localhost:8000/users ]
//todo lo relacionado con tareas [ localhost:8000/todos ]
//GET => users

app.listen(PORT, ()=>{
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
