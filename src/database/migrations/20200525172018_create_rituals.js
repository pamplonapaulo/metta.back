exports.up = function(knex) {
  return knex.schema.createTable('rituals', function (table) {
    table.increments();
    table.string('createdAt').notNullable();
    table.string('title').notNullable();
    table.float('place_id').notNullable();
    table.foreign('place_id').references('id').inTable('places');
    table.string('paragraph').notNullable();
    table.float('chargeValue').notNullable();
    table.float('sessionLength').notNullable();
    table.boolean('isRepeatable').notNullable();
    table.boolean('needsAppointment').notNullable();
    table.specificType('daysOfMonths', 'INT[]').notNullable();
    table.specificType('daysOfWeeks', 'INT[]').notNullable();
    table.specificType('monthsOfYears', 'INT[]').notNullable();
    table.specificType('weeksOfMonths', 'INT[]').notNullable();
    table.specificType('hoursOfDays', 'INT[]').notNullable();
    table.specificType('attendenceHistory').notNullable();
    table.float('attendenceAverage').notNullable();
    table.float('fullCapacity').notNullable();
    table.string('owner_id');
    table.foreign('owner_id').references('id').inTable('users');
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('rituals')
};
