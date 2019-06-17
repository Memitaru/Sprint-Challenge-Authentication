const db = require('../database/dbConfig.js');

module.exports = {
    add,
    find,
    findById,
    findBy
}

function add(user){
    return db('users')
        .insert(user, 'id')
        .then(ids => {
            const [id] = ids;
            return findById(id)
        })
}

function find(){
    return db('users')
        .select('id', 'username', 'password')
}

function findById(id){
    return db('users')
    .where({id})
    .first()
}

function findBy(filter){
    return db('users').where(filter)
}