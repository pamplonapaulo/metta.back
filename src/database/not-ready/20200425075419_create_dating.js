
exports.up = function(knex) {
  knex.schema.createTable('datings', function (table) {
    table.string('id'),primary();
    table.string('userId').notNullable();
    table.string('createdAt').notNullable();
    table.boolean('isAllowed').notNullable();
    table.string('genderTarget').notNullable();
    table.boolean('hasActiveMatch');
    table.array('matches');
    table.boolean('hasBadReviews');
    table.array('badReviews');
  });
};

exports.down = function(knex) {
  knex.schema.dropTable('datings')
};
