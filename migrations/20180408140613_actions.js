
exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('actions', table => {
      table.increments('id')
      table.string('good_deed')
      table.string('improvement')
      table.string('wish')
      table.integer('user_id')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists(actions)
};
