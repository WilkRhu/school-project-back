const connection = require('../database/connection');
const { userValidation, userValidationUpdate } = require('../validations/userValidation');
const addressValidation = require('../validations/enderecoValidation');
const {
  create, getAll, getOne, update, destroy,
} = require('../services/databaseEntitys');
const { userSchema, userSchemaReturn, userGetReturn } = require('../models/users');

const addressUser = async (endereco, id) => {
  const { value } = addressValidation.validate(endereco);
  await connection('address').insert({
    users_id: id || 'não cadastrado',
    rua: value.rua || 'não cadastrado',
    numero: value.numero || 'não cadastrado',
    cidade: value.cidade || 'não cadastrado',
    bairro: value.bairro || 'não cadastrado',
    estado: value.estado || 'não cadastrado',
    telefone: value.telefone || 'não cadastrado',
    referencia: value.referencia || 'não cadastrado',
  });
};

const createUsers = async (req, res) => {
  try {
    const { error, value } = userValidation.validate(req.body);
    if (!error) {
      const data = await userSchema(value);
      const user = await create('users', data);
      return res.status(201).json(userSchemaReturn(user));
    }
    return error.message;
  } catch (error) {
    return res.status(400).json({
      message: error.message,
    });
  }
};

const getAllUser = async (req, res) => {
  try {
    const data = await getAll('users');
    return res.status(200).json(userGetReturn(data));
  } catch (error) {
    return res.status(400).json({
      message: error.message,
    });
  }
};

const getOneUser = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await getOne('users', id);
    return res.status(200).json(userSchemaReturn(data));
  } catch (error) {
    return res.status(400).json({
      message: error.message,
    });
  }
};

const updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await update('users', id, req.body);
    return res.status(201).json(userSchemaReturn(data));
  } catch (error) {
    return res.status(400).json({
      message: error.message
    });
  }
};

const destroyUser = async (req, res) => {
  try {
    const { id } = req.params;
    const deleteUser = await destroy('users', id)
    if (deleteUser > 0) {
      return res.status(201).json({
        message: 'Usuário deletado com sucesso!'
      });
    }
    return res.status(404).json({
      message: 'Usuário não encontrado!'
    })
  } catch (err) {
    return res.status(400).json(err);
  }
};

module.exports = {
  addressUser,
  createUsers,
  getAllUser,
  getOneUser,
  updateUser,
  destroyUser,
};
