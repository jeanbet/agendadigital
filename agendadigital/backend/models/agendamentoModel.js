const pool = require('../db');

const criarTabela = async () => {
  const query = \`
    CREATE TABLE IF NOT EXISTS agendamentos (
      id SERIAL PRIMARY KEY,
      nome TEXT NOT NULL,
      cpf VARCHAR(14) NOT NULL,
      telefone VARCHAR(20),
      endereco TEXT,
      especialidade TEXT,
      data_consulta DATE
    );
  \`;
  await pool.query(query);
};

const inserirAgendamento = async (dados) => {
  const { nome, cpf, telefone, endereco, especialidade, data_consulta } = dados;
  const query = \`
    INSERT INTO agendamentos (nome, cpf, telefone, endereco, especialidade, data_consulta)
    VALUES ($1, $2, $3, $4, $5, $6);
  \`;
  await pool.query(query, [nome, cpf, telefone, endereco, especialidade, data_consulta]);
};

const listarAgendamentos = async () => {
  const result = await pool.query('SELECT * FROM agendamentos ORDER BY data_consulta');
  return result.rows;
};

module.exports = {
  criarTabela,
  inserirAgendamento,
  listarAgendamentos
};