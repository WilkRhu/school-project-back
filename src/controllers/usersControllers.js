const connection = require("../database/connection");
const userValidation = require("../validations/userValidation");
const addressValidation = require("../validations/enderecoValidation");
const jwt = require("jsonwebtoken");
const md5 = require("md5");

const addressUser = async (endereco, id) => {
  const { value } = addressValidation.validate(endereco);
  await connection("address").insert({
    users_id: id || "não cadastrado",
    rua: value.rua || "não cadastrado",
    numero: value.numero || "não cadastrado",
    cidade: value.cidade || "não cadastrado",
    bairro: value.bairro || "não cadastrado",
    estado: value.estado || "não cadastrado",
    telefone: value.telefone || "não cadastrado",
    referencia: value.referencia || "não cadastrado",
  });
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

const updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const { user } = req.body;
    await connection("users").where("id", id).update(user);
    return res.status(201).json("Usuário Atualizado com sucesso!");
  } catch (err) {
    return res.status(400).json(err);
  }
};

const updataAdressUser = async (req, res) => {
  try {
    const { user_id } = req.params;
    const { endereco } = req.body;
    await connection("address").where("users_id", user_id).update(endereco);
    return res.status(201).json("Endereço atualizado com sucesso");
  } catch (err) {
    return res.status(400).json(err);
  }
};

module.exports = {
  createUsers,
  updateUser,
  updataAdressUser,
};
