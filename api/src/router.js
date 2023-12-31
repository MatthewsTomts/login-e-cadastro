const tasksController = require("./controllers/tasksController")
const userController = require("./controllers/userController");
const autenticacao = require("./middlewares/autenticacao");
const middauth = require("./middlewares/autenticacao");

const express = require("express");
const router = express.Router();


// Rota inicial e pública da API 
router.get("/", (_req, res) => res.status(200).send("olá, mundo"))





/*

█▀█ █▀█ ▀█▀ ▄▀█ █▀   █░█ █▀ █░█ ▄▀█ █▀█ █ █▀█
█▀▄ █▄█ ░█░ █▀█ ▄█   █▄█ ▄█ █▄█ █▀█ █▀▄ █ █▄█
*/

router.post('/user/cadastro', userController.cadastro)

router.post('/user/login', userController.login)

// Rota privada 
router.get('/user/:id', ) 

router.post('/user/pedidoRecuperacao', userController.pedidoRecuperacao)

router.post('/user/recuperar', userController.recuperar)





/*

█▀█ █▀█ ▀█▀ ▄▀█ █▀   ▀█▀ ▄▀█ █▀ █▄▀ █▀
█▀▄ █▄█ ░█░ █▀█ ▄█   ░█░ █▀█ ▄█ █░█ ▄█

*/  

// Rota para retornar todas as tarefas do banco de dados
router.get("/tasks/:id", autenticacao, tasksController.getAll);

// Rota para criar uma nova tarefa
router.post("/createTasks", autenticacao, tasksController.createTask);

// Rota para deletar uma tarefa específica
router.delete("/tasks/:id", autenticacao, tasksController.deleteTask);

// Rota para editar uma tarefa específica
router.put("/tasks/:id", autenticacao, tasksController.updateTask);







module.exports = router;