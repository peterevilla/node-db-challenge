const db = require('../data/db-config');


module.exports = {

    find,
    add,
    findById,
    remove,
    update,
};


function find() {
    return db('tasks')
}
function findById(id) {

    return db('tasks').where({ id }).first();
  }

function add(task) {
    return db('tasks').insert(task);

  }



function remove(id) {
 
     return db('tasks').where({id: Number(id)}).del();
}

function update(id, changes) {

    return db('tasks').where('id', Number(id)).update(changes)
}
