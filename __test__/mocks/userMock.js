const faker = require('faker')

const userSuccess = {
    nome: faker.internet.userName(),
    login: "fulano",
    email: faker.internet.email(),
    dataNascimento: "08/02/1986",
    senha: faker.internet.password(),
    tipo: "admin"
}

const userFailEmail = {
    nome: faker.internet.userName(),
    login: "fulano",
    dataNascimento: "08/02/1986",
    senha: faker.internet.password(),
    tipo: "admin"
}

module.exports = {
    userSuccess,
    userFailEmail
}