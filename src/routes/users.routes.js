const { Router } = require('express');
const { 
  getAllUsers,
  getUserById,
  getUserWithTasks, 
  createUser,
  updateUsers,
  deleteUsers,
} = require('../controllers/users.controller');
const authMiddleware = require('../middlwares/auth.middleware');


//instancia del router
const router = Router();
//localhost:8000/users
//controlador
router.get('/users', authMiddleware, getAllUsers);                //l
router.get('/users/:id',authMiddleware, getUserById);            //l
//obtener un usuario con sus tareas
router.get('/users/:id/todos', authMiddleware, getUserWithTasks); //l

router.post('/users', createUser);                //l
router.put('/users/:id', authMiddleware, updateUsers);            //??
router.delete('/users/:id', authMiddleware, deleteUsers);         //l

module.exports = router;