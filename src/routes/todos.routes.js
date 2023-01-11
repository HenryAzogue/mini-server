const { Router } = require('express');
const { 
  getAllTodos,
  getTodoById,
  getTodoWithCategories, 
  createTodo,
  updateTodos,
  deleteTodos,
} = require('../controllers/todos.controller');


//instancia del router
const router = Router();
//localhost:8000/users
//controlador
router.get('/todos', getAllTodos);
router.get('/todos/:id', getTodoById);
//obtener un usuario con sus tareas
router.get('/todos/:id/category', getTodoWithCategories);

router.post('/todos', createTodo);
router.put('/todos/:id', updateTodos);
router.delete('/todos/:id', deleteTodos);

module.exports = router;