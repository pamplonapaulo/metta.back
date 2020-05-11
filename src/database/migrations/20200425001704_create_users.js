exports.up = function(knex) {
  return knex.schema.createTable('users', function (table) {
    //table.increments();
    table.string('id').primary();
    table.string('createdAt').notNullable();
    table.string('email').notNullable();
    table.string('name').notNullable();
    table.string('gender').notNullable();
    table.string('country').notNullable();
    table.string('uf', 2).notNullable();
    table.string('city').notNullable();
    table.string('whatsapp').notNullable();
    table.string('password').notNullable();
    table.string('bio');
    table.string('avatarImg');
    table.string('meditationLength').notNullable();
    table.string('meditationFavorites');
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('users')
};
