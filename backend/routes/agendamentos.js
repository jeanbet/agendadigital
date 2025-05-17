const express = require('express');
const router = express.Router();
const { criarTabela, inserirAgendamento, listarAgendamentos } = require('../models/agendamentoModel');

criarTabela();

router.post('/', async (req, res) => {
  try {
    await inserirAgendamento(req.body);
    res.status(201).send({ mensagem: 'Agendamento realizado com sucesso!' });
  } catch (err) {
    res.status(500).send({ erro: 'Erro ao agendar consulta.' });
  }
});

router.get('/', async (req, res) => {
  try {
    const agendamentos = await listarAgendamentos();
    res.send(agendamentos);
  } catch (err) {
    res.status(500).send({ erro: 'Erro ao buscar agendamentos.' });
  }
});

module.exports = router;