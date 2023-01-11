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
router.get('/users', getAllUsers);
router.get('/users/:id', getUserById);
//obtener un usuario con sus tareas
router.get('/users/:id/todos', getUserWithTasks);

router.post('/users', createUser);
router.put('/users/:id', updateUsers);
router.delete('/users/:id', deleteUsers);

module.exports = router;