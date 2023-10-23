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


const pedidoRecuperacao = async (codigo, email) => {
    return "teste"
    // try {
    //     const sql = 'SELECT * FROM Users WHERE email = ?'
    //     let teste = conn.execute(sql, [email])[0]
    //     if(teste) {
    //         const sql = 'UPDATE Users SET senha = ? WHERE email = ?'
    //         const resultado = conn.execute(sql, [codigo, email])
    //         return "teste"
    //     } else {
    //         return 'Usuário não existe'
    //     }
    // } catch {
    //     return 'Erro na inserção do cógido'
    // }
}


module.exports = {
    validacaoEmailCadastrado,
    pedidoRecuperacao,
    cadastro
}