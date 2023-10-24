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
    try {
        const sql = 'SELECT * FROM Users WHERE email = ?'
        let select = await conn.execute(sql, [email])
        if (select[0][0]) {
            const sql = 'UPDATE Users SET senha = ? WHERE email = ?'
            const resultado = conn.execute(sql, [codigo, email])
            return resultado
        } else {
            return 'Usuário não existe'
        }
    } catch {
        return 'Erro na inserção do cógido'
    }
}


module.exports = {
    validacaoEmailCadastrado,
    pedidoRecuperacao,
    cadastro
}