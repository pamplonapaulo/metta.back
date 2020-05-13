exports.up = function(knex) {
  return knex.schema.createTable('scheduleReviews', function (table) {
    table.increments();
    table.string('createdAt').notNullable();
    table.string('title').notNullable();
    table.string('starsRate').notNullable();
    table.string('reviewParagraph').notNullable();
    table.string('user_id');
    table.foreign('user_id').references('id').inTable('users');

    table.string('schedule_id');
    table.foreign('schedule_id').references('id').inTable('schedule');
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('scheduleReviews')
};
