
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('actions').del()
    .then(function () {
      // Inserts seed entries
      return knex('actions').insert([
        {id: 1, good_deed: 'I am volunteering for smog pollution at Indonesian Embassy', improvement: 'I think I should have try to find sponsorship too', wish: 'I wish people are aware of this event', user_id: '1'},
        {id: 2, good_deed: 'I am working in red cross as a volunteer and made the store looks better', improvement: 'I do think I can stay half an hour longer so that I can clean the floor as well', wish: 'I wish people are going to this store more often', user_id: '2'},
        {id: 3, good_deed: 'I am helping my friend to deploy her artwork for the exhibition', improvement: 'I think I can also contribute more about her theme', wish: 'I wish many people are coming to her exhibition as her work is amazing', user_id: '3'}
      ]);
    });
};
