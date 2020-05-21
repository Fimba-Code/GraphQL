const express = require("express");
const app = express();
const PORT = 4000;

require("./src/config/db")();
const appMain = require("./src/app");
appMain(app)

app.listen({port: PORT}, () => {
    console.log("servidor rodando na porta "+PORT);
});

