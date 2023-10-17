const conn = require("./conn");

const cadastro = (email, senha) => {
    
    const sql = "INSERT INTO Users VALUES (default, ?, ?);"
    const cadastrarUsuario = conn.execute(sql, [email, senha])
    return { idInserido: cadastrarUsuario.insertId }
}

const validacaoEmailCadastrado = async (email) => {

    const result = await conn.execute(`SELECT COUNT(*) FROM Users WHERE Email = ?;`, [email])
    return result
}   







module.exports = {
    validacaoEmailCadastrado,
    cadastro
}