const db = require('../data/db-config');


module.exports = {

    find,
    add,
    findById,
    remove,
    update,
};


function find() {
    return db('resources')
}
function findById(id) {

    return db('resources').where({ id }).first();
  }

function add(resource) {
    return db('resources')
    .insert(resource)
    .then(ids => {
      return findById(ids[0]);
    });

  }



function remove(id) {
 
     return db('resources').where({id: Number(id)}).del();
}

function update(id, changes) {

    return db('resources').where('id', Number(id)).update(changes)
}
