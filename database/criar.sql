CREATE DATABASE IF NOT EXISTS ToDoList;

USE ToDoList;

CREATE TABLE Tasks (
    pk_Task int PRIMARY KEY AUTO_INCREMENT,
    Titulo varchar(70) NOT NULL,
    `Status` enum("Pendente", "Concluido", "Em Andamento", "Deletada") NOT NULL,
    Criado DATETIME NOT NULL
);