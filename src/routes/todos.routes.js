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
router.get('/todos/:id', getTodoById);                     //
//obtener un usuario con sus tareas 
router.get('/todos/:id/categories', getTodosWithCategories);  //paso3

router.post('/todos', createTodo);                         //
router.put('/todos/:id', updateTodo);                     //
router.delete('/todos/:id', deleteTodo);                  //

module.exports = router;