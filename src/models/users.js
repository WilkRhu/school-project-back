const userSchema = (data) => {
    const user = {
        nome: data.nome,
        login: data.login,
        email: data.email,
        senha: data.senha,
        tipo: data.tipo,
        dataNascimento: data.dataNascimento,
        token: data.token
    }
    return user;
}

module.exports = {userSchema};