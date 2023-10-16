const conn = require("./conn");

const getAll = async () => {
    const [tasks] = await conn.execute("SELECT * FROM Tasks;");
    return tasks;
};

const createTask = async (task) => {
    const { title } = task;

    const sql = "INSERT INTO Tasks VALUES (default, ?, 'Pendente', NOW());"

    const [createTask] = await conn.execute(sql, [title]);

    return { idInserido: createTask.insertId };
};

const deleteTask = async (id) => {
    const sql = "DELETE FROM Tasks WHERE pk_Task = ?;"

    await conn.execute(sql, [id]);
};

const updateTask = async (id, task) => {
    const { title, status } = task;

    const sql = "UPDATE Tasks SET Titulo = ?, `Status` = ? WHERE pk_Task = ?;"
    const [updateTask] = await conn.execute(sql, [title, status, id]);

    return { taskAtualizada: updateTask };
};

module.exports = {
    createTask,
    deleteTask,
    updateTask,
    getAll
};