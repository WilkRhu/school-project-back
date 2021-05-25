const connection = require("../database/connection");
const userValidation = require("../validations/userValidation");
const addressValidation = require("../validations/enderecoValidation");
const jwt = require("jsonwebtoken");
const md5 = require("md5");
const { create, getAll } = require("../services/databaseEntitys");
const { userSchema, userSchemaReturn, userGetReturn } = require("../models/users");
const { hashPassword } = require("../services/hashPassword");

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
  try {
    const { error, value } = userValidation.validate(req.body)
    if(!error) {
        const data = await userSchema(value)
        const user = await create('users', data)
        return res.status(201).json(userSchemaReturn(user))
    }
    throw error.message
  } catch (error) {
    return res.status(400).json({
      message: error.message
    })
  }
};

const getAllUser =  async (req, res) => {
  try {
    const data = await getAll('users');
    return res.status(200).json(userGetReturn(data))
  } catch (error) {
    return res.status(400).json({
      message: error.message
    })
  }
}

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
  getAllUser,
  updateUser,
  updataAdressUser,
};
