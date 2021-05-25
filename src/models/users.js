const { hashPassword } = require('../services/hashPassword');

const userSchema = async (data) => {
  const user = {
    nome: data.nome,
    login: data.login,
    email: data.email,
    senha: await hashPassword(data.senha),
    tipo: data.tipo,
    dataNascimento: data.dataNascimento,
  };

  return user;
};

const userSchemaReturn = (data) => {
  const user = {
    nome: data[0].nome,
    login: data[0].login,
    email: data[0].email,
    tipo: data[0].tipo,
    dataNascimento: data[0].dataNascimento,
  };

  return user;
};

const userGetReturn = (array) => {
  const returnUser = [];
  array.map((item) => {
    const user = {
      nome: item.nome,
      login: item.login,
      email: item.email,
      tipo: item.tipo,
      dataNascimento: item.dataNascimento,
    };

    returnUser.push(user);
  });

  return returnUser;
};

module.exports = {
  userSchema,
  userSchemaReturn,
  userGetReturn,
};
