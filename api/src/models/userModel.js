const conn = require("./conn");

const cadastro = (email, senha) => {
    const sql = "INSERT INTO Users VALUES (default, ?, ?);"
    const cadastrarUsuario = conn.execute(sql, [email, senha])
    return { idInserido: cadastrarUsuario.insertId }
}

const validacaoEmailCadastrado = async (email) => {

    const result = await conn.execute(`SELECT COUNT(*) AS pessoa FROM Users WHERE Email = ?;`, [email])
    return result
}   

const pegarDados = async (email) => {

    const result = await conn.execute(`SELECT * from Users WHERE Email = ?;`, [email])

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

const recuperar = async (codigo, email, senha) => {
    try {
        const sql = 'SELECT * FROM Users WHERE email = ? AND senha = ?'
        let select = await conn.execute(sql, [email, codigo])
        if (select[0][0]) {
            const sql = 'UPDATE Users SET senha = ? WHERE email = ? AND senha = ?'
            const resultado = conn.execute(sql, [senha, email, codigo])
            return {msg : "Senha recuperada com sucesso!"}
        } else {
            return {msg: 'Email ou Código errado'}
        }
    } catch {
        return {msg: 'Erro na recuperação de senha'}
    }
}

module.exports = {
    validacaoEmailCadastrado,
    pedidoRecuperacao,
    pegarDados,
    recuperar,
    cadastro
}