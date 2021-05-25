const Joi = require('@hapi/joi');

const userValidation = Joi.object({
  nome: Joi.string().min(3).max(30).required(),
  login: Joi.string().alphanum().required(),
  email: Joi.string()
    .email({
      minDomainSegments: 2,
      tlds: { allow: ['com', 'net'] },
    })
    .required(),
  dataNascimento: Joi.string().required(),
  senha: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,100}$')).required(),
  tipo: Joi.string().required(),
});

const userValidationUpdate = Joi.object({
  nome: Joi.string().min(3).max(30),
  login: Joi.string().alphanum(),
  email: Joi.string()
    .email({
      minDomainSegments: 2,
      tlds: { allow: ['com', 'net', 'br'] },
    }),
  dataNascimento: Joi.string(),
  tipo: Joi.string(),
});

module.exports = {
  userValidation,
  userValidationUpdate,
};
