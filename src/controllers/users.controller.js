const UserServices = require('../services/user.services');

const getAllUsers = async (req, res) => {//l
  try {
    const result = await UserServices.getAll();
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json(error.message);
  }

}
const getUserById = async (req, res) => {//l
  try {
    const {id} = req.params;
    const result = await UserServices.getById(id);
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json(error.message);
  }
}

const getUserWithTasks = async (req, res) =>{//l
  try {
    const {id} = req.params;
    const result = await UserServices.getWithTasks(id);
    res.json(result);//defecto status 200
  } catch (error) {
    res.status(400).json(error.message);
  }
}

const createUser = async (req, res) => {//l
  try {
    const newUser = req.body;
    const result = await UserServices.create(newUser);
    res.status(201).json(result);
  } catch (error) {
    res.status(400).json(error.message);
  }
}

const updateUsers = async (req, res) => {//??
  try {
    const { id } = req.params;
    const field = req.body;
    const result = await UserServices.update(field, id);
    res.json(result);
  } catch (error) {
    res.status(400).json(error.message);
  }
}

const deleteUsers = async (req, res) => {//l
  try {
    const { id } = req.params;
    const result = await UserServices.delete(id);
    res.json(result);
  } catch (error) {
    res.status(400).json(error.message);
  }
}


module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  updateUsers,
  deleteUsers,
  getUserWithTasks
}