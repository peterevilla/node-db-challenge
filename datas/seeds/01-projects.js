exports.seed = function(knex) {
    return knex('projects').insert([
      {
        project_name: 'DB Sprint Challenge',
        project_description: 'I am ready',
        completed: 0,
      },
    ]);
  };