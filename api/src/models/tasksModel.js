const conn = require("./conn");
const data = require("../functions");

const getAll = async () => {
    const [tasks] = await conn.execute("SELECT * FROM Tasks;");
    return tasks;
};

const createTask = async (task) => {
    const idUsuario = task.id;
    const tarefa = task.title;

    const sql = "INSERT INTO Tasks VALUES (default, ?, ?, 'Pendente', NOW());"

    const [createTask] = await conn.execute(sql, [idUsuario, title]);

    return { idInserido: createTask.insertId };
};

const deleteTask = async (id) => {

    const sql = "DELETE FROM Tasks WHERE idTask = ?;"
    await conn.execute(sql, [id]);
};

const updateTask = async (id, task) => {
    const { title, status } = task;

    const sql = "UPDATE Tasks SET Titulo = ?, `Status` = ? WHERE idTask = ?;"
    const [updateTask] = await conn.execute(sql, [title, status, id]);

    return { taskAtualizada: updateTask };
};

module.exports = {
    createTask,
    deleteTask,
    updateTask,
    getAll
}