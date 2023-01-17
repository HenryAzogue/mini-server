const { Router } = require('express');
const { 
  getAllTodo,
  getTodoById,
  createTodo,
  updateTodo,
  deleteTodo,
  getTodosWithCategories
} = require('../controllers/todos.controller');
const authMiddleware = require('../middlwares/auth.middleware');


//instancia del router
const router = Router();
//localhost:8000/users
//controlador         //se ejecuta de izquierda a derecha
router.get('/todos', authMiddleware,getAllTodo);                         //
router.get('/todos/:id', authMiddleware, getTodoById);                     //
//obtener un usuario con sus tareas 
router.get('/todos/:id/categories', authMiddleware, getTodosWithCategories);  //paso3

router.post('/todos', authMiddleware, createTodo);                         //
router.put('/todos/:id', authMiddleware, updateTodo);                     //
router.delete('/todos/:id', authMiddleware, deleteTodo);                  //

module.exports = router;