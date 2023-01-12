const TodoServices = require('../services/todos.services');

const getAllTodo = async (req, res) => {                    //
  try {
    const result = await TodoServices.getAll();
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json(error.message);
  }

}
const getTodoById = async (req, res) => {                   //
  try {
    const {id} = req.params;
    const result = await TodoServices.getById(id);
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json(error.message);
  }
}

const createTodo = async (req, res) => {                    //
  try {
    const newTodo = req.body;
    const result = await TodoServices.create(newTodo);
    res.status(201).json(result);
  } catch (error) {
    res.status(400).json(error.message);
  }
}

const updateTodo = async (req, res) => {                    //
  try {
    const { id } = req.params;
    const field = req.body;
    const result = await TodoServices.update(field, id);
    res.json(result);
  } catch (error) {
    res.status(400).json(error.message);
  }
}

const deleteTodo = async (req, res) => {                    //
  try {
    const { id } = req.params;
    const result = await TodoServices.delete(id);
    res.json(result);
  } catch (error) {
    res.status(400).json(error.message);
  }

}

//paso2
  const getTodosWithCategories = async (req, res) =>{
    try {
      const {id} = req.params;
      const result = await TodoServices.getWithCategories(id);
      res.json({
        message: 'Enviando tareas con categorias',
        data: result
      });
    } catch (error) {
      res.status(400).json({
        error: error.message,
        details: error.stack
      });
    }
  }
module.exports = {
  getAllTodo,
  getTodoById,
  createTodo,
  updateTodo,
  deleteTodo,
  getTodosWithCategories
}