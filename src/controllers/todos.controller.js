const TodoServices = require('../services/todos.services');

const getAllTodo = async (req, res) => {
  try {
    const result = await TodoServices.getAll();
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json(error.message);
  }

}
const getTodoById = async (req, res) => {
  try {
    const {id} = req.params;
    const result = await TodoServices.getById(id);
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json(error.message);
  }
}

const getTodoWithCategorie = async (req, res) =>{
  try {
    const {id} = req.params;
    const result = await TodoServices.getWithCategory(id);
    res.json(result);//defecto status 200
  } catch (error) {
    res.status(400).json(error.message);
  }
}

const createTodo = async (req, res) => {
  try {
    const newTodo = req.body;
    const result = await TodoServices.create(newTodo);
    res.status(201).json(result);
  } catch (error) {
    res.status(400).json(error.message);
  }
}

const updateTodo = async (req, res) => {
  try {
    const { id } = req.params;
    const field = req.body;
    const result = await TodoServices.update(field, id);
    res.json(result);
  } catch (error) {
    res.status(400).json(error.message);
  }
}

const deleteTodo = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await TodoServices.delete(id);
    res.json(result);
  } catch (error) {
    res.status(400).json(error.message);
  }
}
module.exports = {
  getAllTodo,
  getTodoById,
  getTodoWithCategorie,
  createTodo,
  updateTodo,
  deleteTodo
}