const { Router } = require('express');
const { 
  getAllUsers,
  getUserById,
  getUserWithTasks, 
  createUser,
  updateUsers,
  deleteUsers,
} = require('../controllers/users.controller');


//instancia del router
const router = Router();
//localhost:8000/users
//controlador
router.get('/users', getAllUsers);                //l
router.get('/users/:id', getUserById);            //l
//obtener un usuario con sus tareas
router.get('/users/:id/todos', getUserWithTasks); //l

router.post('/users', createUser);                //l
router.put('/users/:id', updateUsers);            //??
router.delete('/users/:id', deleteUsers);         //l

module.exports = router;