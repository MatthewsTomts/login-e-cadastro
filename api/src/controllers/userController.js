const userModel = require("../models/userModel")
const bcrypt = require('bcryptjs')

const cadastro = async (req, res) => {

    const  { email, senha, confirmarSenha} = req.body



    // Email não informado
    if (!email) {
        return res.status(422).json({msg : "O email é obrigatório!"})
    }
    
    // Senha não informada
    if (!senha) {
        return res.status(422).json({msg : "A senha é obrigatória!"})
    }
    
    // Senha e confirmar senha divergentes 
    if (senha !== confirmarSenha) {
        return res.status(422).json({msg : "Senha e confirmar senha divergentes!"}) 
    }
    
    // Verificando se o email cadastrado já existe na plataforma ...
    const usuarioExiste = await  userModel.validacaoEmailCadastrado(email)

    if (usuarioExiste > 0) {
        return res.status(422).json({msg : "Email já cadastrado na plataforma!"}) 

    }

    // Criptografia da senha do usuário
    const salt = await bcrypt.genSalt(12)
    const senhaHash = await bcrypt.hash(senha, salt)


    try {

        user = await userModel.cadastro(email, senhaHash)
        res.status(201).json({msg : "Usuário cadastrado com sucesso!"})
        

    } catch (err) {
        
        console.log(err);
        res.status(201).json({msg : "Ocorreu alguma falha no servidor!"})

    }
    








}


module.exports = {
    cadastro
}