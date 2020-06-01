const db = require('../datas/db-config');


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
  return db('tasks')
  .insert(task)
  .then(ids => {
    return findById(ids[0]);
  });

  }



function remove(id) {
 
     return db('tasks').where({id: Number(id)}).del();
}

function update(id, changes) {

    return db('tasks').where('id', Number(id)).update(changes)
}
