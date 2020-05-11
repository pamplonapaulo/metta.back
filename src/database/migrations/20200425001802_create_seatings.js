exports.up = function(knex) {
  return knex.schema.createTable('seatings', function (table) {
    table.increments();
    //table.string('id').primary();
    table.string('createdAt').notNullable();
    table.string('lengthTarget', 3).notNullable();
    table.string('accomplishmentRate').notNullable();
    table.string('seatersSync').notNullable();
    table.string('geoLatitude').notNullable();
    table.string('geoLongitude').notNullable();

    table.string('user_id').notNullable();
    table.foreign('user_id').references('id').inTable('users');
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('seatings')
};
