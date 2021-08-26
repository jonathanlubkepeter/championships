const express = require('express');
const app = express();
app.use(express.json());

const ChampionshipCreate = require('./routes/Championship');
app.use('/championship-create', ChampionshipCreate);

app.listen(9000, () => {
    console.log('Server ativo na porta 9000');
});
