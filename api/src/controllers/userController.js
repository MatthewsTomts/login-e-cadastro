const tasksModel = require("../models/tasksModel")


const loginUser = async (req, res) => {

    const  { email, senha } = req.body

    if (!email) {
        return res.status(422).json({msg : "O email é obrigatório!"})
    }

    if (!senha) {
        return res.status(422).json({msg : "A senha é obrigatória!"})
    }

}


module.exports = {
    loginUser
}