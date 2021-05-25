const connection = require('../database/connection');

const create = async (table, data) => await connection(table).returning('*').insert(data);

const getAll = async (table) => await connection(table).select().from(table).timeout(1000, { cancel: true });

const getOne = async (table, id) => await connection(table).where('id', id).select();

const update = async (table, id, data) => await connection(table).where('id', id).update(data).returning('*');

const destroy = async (table, id) => await connection(table).where('id', id).delete();

module.exports = {
    create,
    getAll,
    getOne,
    update,
    destroy,
};
