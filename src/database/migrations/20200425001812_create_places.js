
exports.up = function(knex) {
  return knex.schema.createTable('places', function (table) {
    table.increments();
    table.string('createdAt').notNullable();
    table.string('name').notNullable();
    table.string('doctrine').notNullable();
    table.string('whatsapp').notNullable();
    table.string('geoLatitude').notNullable();
    table.string('geoLongitude').notNullable();
    table.string('fullCapacity').notNullable();
    table.string('historyCheckedIns').notNullable();
    table.string('rate').notNullable();
    table.string('reviews').notNullable();
    table.string('isAppPartner').notNullable();
    table.string('needsAppointment').notNullable();
    table.string('workingDaysOpensAt').notNullable();
    table.string('workingDaysClosesAt').notNullable();
    table.string('wkndOpensAt').notNullable();
    table.string('wkndClosesAt').notNullable();
    table.string('tipicalSeatingLength').notNullable();
    table.string('chargeValue').notNullable();
    table.string('owner_id');
    table.foreign('owner_id').references('id').inTable('users');
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('places')
};
