const userModel = require("../models/userModel")
const nodemailer = require('nodemailer')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')

const cadastro = async (req, res) => {
    const  { email, senha } = req.body

    // // Email não informado
    // if (!email) {
    //     return res.status(422).json({msg : "O email é obrigatório!"})
    // }
    
    // // Senha não informada
    // if (!senha) {
    //     return res.status(422).json({msg : "A senha é obrigatória!"})
    // }
    
    // // Senha e confirmar senha divergentes 
    // if (senha !== confirmarSenha) {
    //     return res.status(422).json({msg : "Senha e confirmar senha divergentes!"}) 
    // }
    

    const usuarioExiste = await userModel.validacaoEmailCadastrado(email)

    const resposta = usuarioExiste[0][0]['pessoa'];

    if (resposta > 0) {
        return res.status(422).json({msg : "Email já cadastrado na plataforma!"}) 
    } else {

        // return res.status(422).json({msga: "Usuário cadastrado com sucesso"})

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

}

const login = async (req, res) => {

    const {email, senha} = req.body


    // Email não informado
    if (!email) {
        return res.status(422).json({msg : "O email é obrigatório!"})
    }

    // Senha não informada
    if (!senha) {
        return res.status(422).json({msg : "A senha é obrigatória!"})
    }

    // Verificando se o email cadastrado já existe na plataforma ...
    const user = await userModel.validacaoEmailCadastrado(email);

    const estaNoBanco = user[0][0]['pessoa'];

    if (estaNoBanco == 0) {
        return res.status(404).json({msg : "Usuário não encontrado na base de dados."}) 
    } else {
        const dadosDaPessoa = await userModel.pegarDados(email);
        const idUser = dadosDaPessoa[0][0]["idUsers"];

        const senhaDoBanco = dadosDaPessoa[0][0]["Senha"];
        
        const senhaDigitada = bcrypt.hashSync(senha, 12);
        
        const checkSenha = bcrypt.compareSync(senha, senhaDoBanco);
        
        if (!checkSenha) {
            return res.status(422).json({msg : "Login ou Senha inválida!"});
        } else {

            try {
                const secret = process.env.SECRET
        
                const token = jwt.sign({
                    id: user._id, 
                    }, 
                    secret, 
                )
                
                res.status(201).json({msg: "Autenticação válida!", token, idUser})
            } catch (err) {
                
                console.log(err);
                res.status(201).json({msg : "Ocorreu alguma falha no servidor!"})
        
            }
        }
    
    }

}

const pedidoRecuperacao = async (req, res) => {
    const  { email } = req.body

    // Email não informado
    if (!email) {
        return res.status(422).json({msg : "O email é obrigatório!"})
    }

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


    transporter.sendMail(mailOptions, async (error, info) => {
        if (error) {
            return res.status(400).json({msg : 'Erro ao enviar o e-mail: ' + error})
        } else {
            const resultado = await userModel.pedidoRecuperacao(codigo, email)
            return res.status(200).json({
                email : 'E-mail enviado: ' + info.response,
                resultado
            })
        }
    });

}

const recuperar = async (req, res) => {
    const  { email, codigo, senha } = req.body

    // Email não informado
    if (!email) {
        return res.status(422).json({msg : "O email é obrigatório!"})
    }
    
    // Senha não informada
    if (!senha) {
        return res.status(422).json({msg : "A senha é obrigatória!"})
    }
    
    // Senha e confirmar senha divergentes 
    if (!codigo) {
        return res.status(422).json({msg : "O código é obrigatório!"}) 
    }

    const salt = await bcrypt.genSalt(12)
    const senhaHash = await bcrypt.hash(senha, salt)

    
    try {
        const resultado = await userModel.recuperar(codigo, email, senhaHash)
        res.status(201).json(resultado)
    } catch (err) {
        console.log(err);
        res.status(201).json({msg : "Ocorreu alguma falha no servidor!"})
    }
}

module.exports = {
    pedidoRecuperacao,
    recuperar,
    cadastro,
    login
}