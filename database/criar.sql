CREATE DATABASE IF NOT EXISTS ToDoList;

USE ToDoList;

CREATE TABLE Users (
    idUsers int PRIMARY KEY AUTO_INCREMENT,
    Email varchar(100) NOT NULL,
    Senha varchar(256) NOT NULL
);

CREATE TABLE Tasks (
    idTask int PRIMARY KEY AUTO_INCREMENT,
    fk_idUser int not null,
    Titulo varchar(100) NOT NULL,
    `Status` enum("Concluido", "Em Andamento") NOT NULL,
    Criado DATETIME NOT NULL,
    foreign key (fk_idUser) references Users (idUsers)
);