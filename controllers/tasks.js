const Task = require("../models/Task");

const getAllTasks = (req, res) => {
  res.send("getAllTasks");
};

const createTask = async (req, res) => {
  try {
    const task = await Task.create(req.body);
    res.status(201).json({ task });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

const getTask = (req, res) => {
  res.json({ id: req.params.id });
};

const getSingleTask = (req, res) => {
  res.send("getSingleTask");
};

const updateTask = (req, res) => {
  res.send("updateTask");
};

const deleteTask = (req, res) => {
  res.send("deleteTask");
};

module.exports = {
  getAllTasks,
  createTask,
  getTask,
  getSingleTask,
  updateTask,
  deleteTask,
};
