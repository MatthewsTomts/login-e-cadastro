const express = require("express");
const router = require("./router");
const cors = require('cors')
const app = express();


app.use(cors());
app.use(express.json());
app.use(router);

const PORT = process.env.PORT || 3000
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`))


module.exports= app
