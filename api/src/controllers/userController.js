const userModel = require("../models/userModel")
const nodemailer = require('nodemailer')
const jwt = require('jsonwebtoken')
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

        user = await userModel.cadastro(email, senha)
        res.status(201).json({msg : "Usuário cadastrado com sucesso!"})
        
    } catch (err) {
        
        console.log(err);
        res.status(201).json({msg : "Ocorreu alguma falha no servidor!"})

    }
}

const pedidoRecuperacao = async (req, res) => {
    const  { email } = req.body

    const min = 100000; // Menor número de 6 dígitos (inclusive)
    const max = 999999; // Maior número de 6 dígitos (inclusive)
    const codigo = Math.floor(Math.random() * (max - min + 1)) + min;
    
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            type: 'OAuth2',
            user: process.env.EMAIL,
            pass: process.env.EMAIL_PASSWORD,
            clientId: process.env.OAUTH_CLIENTID,
            clientSecret: process.env.OAUTH_CLIENT_SECRET,
            refreshToken: process.env.OAUTH_REFRESH_TOKEN
        },
    });
      
    // Detalhes do e-mail a ser enviado
    const mailOptions = {
        from: process.env.EMAIL,
        to: email,
        subject: 'Recuperação de Senha',
        text: `Você solicitou a recuperação de senha do app Awake, este é o código de recuperação: ` + codigo,
    };


    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return res.status(400).json({msg : 'Erro ao enviar o e-mail: ' + error})
        } else {
            let resultado = userModel.pedidoRecuperacao(codigo, email)
            return res.status(400).json({
                email : 'E-mail enviado: ' + info.response,
                banco: "teste"
            })
        }
    });

}


module.exports = {
    cadastro,
    pedidoRecuperacao
}