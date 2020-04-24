const connection = require("../database/connection");
const knex = require("knex");
const { userSchema } = require("../models/users");
const userValidation = require("../validations/userValidation");
const addressValidation = require("../validations/enderecoValidation");
const jwt = require("jsonwebtoken");
const md5 = require("md5");

const addressUser = async (endereco, id) => {
  const { error, value } = addressValidation.validate(endereco);
  if (!error) {
    await connection("address").insert({
      users_id: id,
      rua: value.rua,
      numero: value.numero,
      cidade: value.cidade,
      bairro: value.bairro,
      estado: value.estado,
      telefone: value.telefone,
      referencia: value.referencia,
    });
  } else {
    await connection("address").insert({
      users_id: "não cadastrado",
      rua: "não cadastrado",
      numero: "não cadastrado",
      cidade: "não cadastrado",
      bairro: "não cadastrado",
      estado: "não cadastrado",
      telefone: "não cadastrado",
      referencia: "não cadastrado",
    });
  }
};

const createUsers = async (req, res) => {
  const { user, endereco } = req.body;
  const { error, value } = userValidation.validate(user);
  if (!error) {
    try {
      const user = await connection("users")
        .returning("id")
        .insert({
          nome: value.nome,
          login: value.login,
          email: value.email,
          senha: md5(value.senha),
          dataNascimento: value.dataNascimento,
          tipo: value.tipo,
          token: jwt.sign(
            { nome: value.nome, login: value.login, emial: value.email },
            "shhhhh"
          ),
          create_at: new Date(),
          updated_at: new Date(),
        });

      endereco ? addressUser(endereco, user[0]) : addressUser("Não Cadastrado");
      return res.status(201).json("Cadastro realizado com sucesso!");
    } catch (err) {
      return res.status(400).json(err);
    }
  } else {
    return res.status(400).json(error.details);
  }
};

module.exports = {
  createUsers,
};
