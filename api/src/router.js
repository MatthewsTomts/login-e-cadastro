const tasksController = require("./controllers/tasksController");
const express = require("express");

const router = express.Router();

router.get("/", (_req, res) => res.status(200).send("olá, mundo"));

router.get("/tasks", tasksController.getAll);
router.post("/tasks", tasksController.createTask);
router.delete("/tasks/:id", tasksController.deleteTask);
router.put("/tasks/:id", tasksController.updateTask);

router.get("/tasks", tasksController.getAll);

module.exports = router;