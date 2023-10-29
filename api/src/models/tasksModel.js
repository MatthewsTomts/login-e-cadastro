const conn = require("./conn");
const data = require("../functions");

const getAll = async (id) => {
    const [tasks] = await conn.execute("SELECT * FROM Tasks WHERE idUser = ?;", [id]);
    return tasks;
};

const createTask = async (task) => {
    const idUsuario = task.id;
    const tarefa = task.title;

    const sql = "INSERT INTO Tasks VALUES (default, ?, ?, 'Pendente', NOW());"

    const [createTask] = await conn.execute(sql, [idUsuario, tarefa]);

    if (createTask.affectedRows < 0) {
        return {msg : "Erro ao criar a task"};
    } else {
        return {msg : "Task criada com sucesso"};
    }
};

const deleteTask = async (id) => {

    const sql = "DELETE FROM Tasks WHERE idTask = ?;"
    const [resposta] = await conn.execute(sql, [id]);

    if (resposta.affectedRows < 0) {
        return { msg : "Erro ao apagar a task" }
    } else {
        return { msg : "Task apagada com sucesso" }
    }

    
};

const updateTask = async (id, task) => {
    const { title, status } = task;

    const sql = "UPDATE Tasks SET Titulo = ?, `Status` = ? WHERE idTask = ?;"
    const [updateTask] = await conn.execute(sql, [title, status, id]);

    if (updateTask.affectedRows < 1) {
        return { msg : "Erro ao salvar mudancas na task" };

    } else {
        return {msg : "Task atualizada com sucesso"}
    }
};

module.exports = {
    createTask,
    deleteTask,
    updateTask,
    getAll
}