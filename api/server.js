const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("API Cachorro Quente funcionando!");
});

app.post("/hotdog", (req, res) => {

    const {
        quantidade,
        precoPao,
        precoSalsicha,
        precoMolho,
        precoBatata
    } = req.body;

    const custoUnitario =
        Number(precoPao) +
        Number(precoSalsicha) +
        Number(precoMolho) +
        Number(precoBatata);

    const custoTotal =
        custoUnitario * Number(quantidade);

    res.json({
        quantidade,
        custoUnitario,
        custoTotal
    });

});

app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000");
});