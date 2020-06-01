const db = require('../datas/db-config');


module.exports = {

    find,
    add,
    findById,
    remove,
    update,
};


function find() {
    return db('projects')
}
function findById(id) {

    return db('projects').where({ id }).first();
  }

function add(project) {
    return db('projects').insert(project);

  }



function remove(id) {
 
     return db('projects').where({id: Number(id)}).del();
}

function update(id, changes) {

    return db('projects').where('id', Number(id)).update(changes)
}


