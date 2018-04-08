
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {id: 1, name: 'Dana', country: 'New Zealand', Region: 'Wellington'},
        {id: 2, name: 'Kira', country: 'New Zealand', Region: 'Wellington'},
        {id: 3, name: 'Annie', country: 'New Zealand', Region: 'Auckland'}
      ]);
    });
};
