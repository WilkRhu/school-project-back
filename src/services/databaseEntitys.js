const connection = require("../database/connection")

const create = async (table, data) => {
    return await connection(table).returning('*').insert(data)
}


const getAll = async (table) => {
    return await connection(table).select().from(table).timeout(1000, { cancel: true});
}

const getOne = async (table, id) => {
    return (await connection(table).where(id)).find({})
}

const update = async (table, id, data) => {
    return (await connection(table).where(id).update(data))
}

const destroy = async (table, id) => {
    return (await connection(table).where(id).delete())
}

module.exports = {
    create,
    getAll,
    getOne,
    update,
    destroy
}