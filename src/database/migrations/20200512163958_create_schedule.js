exports.up = function(knex) {
  return knex.schema.createTable('schedule', function (table) {
    table.increments();
    table.string('createdAt').notNullable();
    table.string('title').notNullable();
    table.string('place_id').notNullable();
    table.foreign('place_id').references('id').inTable('places');
    table.string('paragraph').notNullable();
    table.string('chargeValue').notNullable();
    table.string('sessionLength').notNullable();
    table.string('isRepeatable').notNullable();
    table.string('needsAppointment').notNullable();
    table.string('daysOfYears').notNullable();
    table.string('daysOfMonths').notNullable();
    table.string('daysOfWeeks').notNullable();
    table.string('monthsOfYears').notNullable();
    table.string('weeksOfMonths').notNullable();
    table.string('hoursOfDays').notNullable();
    table.string('attendenceHistory').notNullable();
    table.string('attendenceAverage').notNullable();
    table.string('fullCapacity').notNullable();
    table.string('owner_id');
    table.foreign('owner_id').references('id').inTable('users');
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('schedule')
};
