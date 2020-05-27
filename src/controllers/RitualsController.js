const connection = require('../database/connection')

module.exports = {

  // async index(request, response) {
  //   const rituals = await connection('rituals').select('*')

  //   return response.json(rituals)
  // },

  async index(request, response) {

    const { place_id } = request.query;

    const rituals = await connection('rituals')
      .join('places', 'places.id', '=', 'rituals.place_id')
      .select([
        'rituals.*', 
        'places.name'
      ])
      .where('place_id', place_id)
    
    return response.json(rituals)
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

    const [id] = await connection('rituals').insert({
      createdAt,
      title,
      place_id,
      paragraph,
      chargeValue,
      sessionLength,
      isRepeatable,
      needsAppointment,
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

    const ritual = await connection('rituals')
      .where('id', id)
      .select('owner_id')
      .first()

      console.log('owner_id:')
      console.log(owner_id)


      console.log('ritual.owner_id:')
      console.log(ritual.owner_id)

    if (ritual.owner_id !== owner_id) {
      return response.status(401).json({ error: 'Operation not allowed'})
    }

    await connection('rituals').where('id', id).delete()

    return response.status(204).send()

  }
}