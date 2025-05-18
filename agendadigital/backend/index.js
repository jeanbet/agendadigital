const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();

const agendamentosRoute = require('./routes/agendamentos');

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());
app.use('/api/agendamentos', agendamentosRoute);

app.get('/', (req, res) => {
  res.send('API Agenda Digital está funcionando.');
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});