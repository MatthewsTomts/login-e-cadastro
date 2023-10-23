const tasksModel = require("../models/tasksModel");


const getAll = async (_req, res) => {
    const tasks = await tasksModel.getAll();

    res.status(200).json(tasks)
};

const createTask = async (req, res) => {
    const { body } = req;

    if (body.title === undefined) {
        res.status(400).json({ mensagem: "O campo 'title' é obrigatório!" })
    } else if(body.title === "") {
        res.status(400).json({ mensagem: "O campo 'title' não pode estar vazio!" })
    } else {
        const tasks = await tasksModel.createTask(body);
    
        res.status(201).json({ mensagem: "Okay Inserido", task: tasks })
    }
};

const deleteTask = async (req, res) => {
    const { id } = req.params;
    await tasksModel.deleteTask(id);
    res.status(204).json()
};

const updateTask = async (req, res) => {
    const { id } = req.params;
    const { body } = req;

    if (body.title === undefined || body.status === undefined) {
        res.status(400).json({ mensagem: "Os campos 'title' e 'status' são obrigatórios!" })
    } else if(body.title === "" || body.status === "") {
        res.status(400).json({ mensagem: "Os campos 'title' e 'status' não podem estar vazios!" })
    } else {
        const tasks = await tasksModel.updateTask(parseInt(id), body);
        res.status(204).json()
    }
};

module.exports = {
    createTask,
    deleteTask,
    updateTask,
    getAll,
};