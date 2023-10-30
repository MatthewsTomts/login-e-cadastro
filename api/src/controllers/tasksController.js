const tasksModel = require("../models/tasksModel");


const getAll = async (req, res) => {
    const { id } = req.params;
    const tasks = await tasksModel.getAll(id);

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
    
        res.status(200).json({ mensagem: tasks })
    }
};

const deleteTask = async (req, res) => {
    const { id } = req.params;
    const resposta = await tasksModel.deleteTask(id);
    res.status(200).json({ msg : resposta })
};

const updateTask = async (req, res) => {
    const { idTask } = req.params;
    const { body } = req;

    if (body.title === undefined || body.status === undefined) {
        res.status(400).json({ mensagem: "Os campos 'title' e 'status' são obrigatórios!" })
    } else if(body.title === "" || body.status === "") {
        res.status(400).json({ mensagem: "Os campos 'title' e 'status' não podem estar vazios!" })
    } else {
        const tasks = await tasksModel.updateTask(parseInt(idTask), body);

        res.status(200).json(tasks)
    }
};

module.exports = {
    createTask,
    deleteTask,
    updateTask,
    getAll,
};