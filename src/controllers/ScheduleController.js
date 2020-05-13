const connection = require('../database/connection')

module.exports = {

  // async index(request, response) {
  //   const schedule = await connection('schedule').select('*')

  //   return response.json(schedule)
  // },

  async index(request, response) {

    const { place_id } = request.query;

    const schedule = await connection('schedule')
      .join('places', 'places.id', '=', 'schedule.place_id')
      .select([
        'schedule.*', 
        'places.name'
      ])
      .where('place_id', place_id)
    
    return response.json(schedule)
  },
  
  async create(request, response) {
    const { 
      title,
      place_id,
      paragraph,
      chargeValue,
      sessionLength,
      isRepeatable,
      needsAppointment,
      daysOfYears,
      daysOfMonths,
      daysOfWeeks,
      monthsOfYears,
      weeksOfMonths,
      hoursOfDays,
      attendenceHistory,
      attendenceAverage,
      fullCapacity
    } = request.body
  
    const owner_id = request.headers.authorization
    const createdAt = new Date()

    const [id] = await connection('schedule').insert({
      createdAt,
      title,
      place_id,
      paragraph,
      chargeValue,
      sessionLength,
      isRepeatable,
      needsAppointment,
      daysOfYears,
      daysOfMonths,
      daysOfWeeks,
      monthsOfYears,
      weeksOfMonths,
      hoursOfDays,
      attendenceHistory,
      attendenceAverage,
      fullCapacity,
      owner_id
    })
    
    return response.json({ id, createdAt })
  },

  async delete(request, response) {
    const { id } = request.params
    const owner_id = request.headers.authorization

    const event = await connection('schedule')
      .where('id', id)
      .select('owner_id')
      .first()

    if (event.owner_id !== owner_id) {
      return response.status(401).json({ error: 'Operation not allowed'})
    }

    await connection('schedule').where('id', id).delete()

    return response.status(204).send()

  }
}