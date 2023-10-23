const tasksController = require("./controllers/tasksController")
const userController = require("./controllers/userController")
const middauth = require("./middlewares/autenticacao")

const express = require("express");
const router = express.Router();


// Rota inicial e pública da API 
router.get("/", (_req, res) => res.status(200).send("olá, mundo"))





/*

█▀█ █▀█ ▀█▀ ▄▀█ █▀   █░█ █▀ █░█ ▄▀█ █▀█ █ █▀█
█▀▄ █▄█ ░█░ █▀█ ▄█   █▄█ ▄█ █▄█ █▀█ █▀▄ █ █▄█
*/

router.post('user/cadastro', userController.cadastro)

router.post('user/login', userController.login)

// Rota privada 
router.get('user/:id', ) 





/*

█▀█ █▀█ ▀█▀ ▄▀█ █▀   ▀█▀ ▄▀█ █▀ █▄▀ █▀
█▀▄ █▄█ ░█░ █▀█ ▄█   ░█░ █▀█ ▄█ █░█ ▄█

*/  

// Rota para retornar todas as tarefas do banco de dados
router.get("/tasks", tasksController.getAll);

// Rota para criar uma nova tarefa
router.post("/tasks", tasksController.createTask);

// Rota para deletar uma tarefa específica
router.delete("/tasks/:id", tasksController.deleteTask);

// Rota para editar uma tarefa específica
router.put("/tasks/:id", tasksController.updateTask);







module.exports = router;