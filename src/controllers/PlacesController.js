const connection = require('../database/connection')

module.exports = {

  async index(request, response) {

    const { latitude, longitude, doctrine } = request.query;

    const [count] = await connection('places')
      .select(['places.*'])
      .where('doctrine', doctrine)
      .count()

    const places = await connection('places')
      .join('users', 'users.id', '=', 'places.owner_id')
      .select([
        'places.*', 
        'users.email'
      ])
      .where('doctrine', doctrine)
    
    response.header('X-Total-Count', count['count(*)'])

    return response.json(places)
  },
  
  async create(request, response) {
    const { 
      name,
      doctrine,
      whatsapp,
      geoLatitude,
      geoLongitude,
      fullCapacity,
      historyCheckedIns,
      rate,
      reviews,
      isAppPartner,
      needsAppointment,
      workingDaysOpensAt,
      workingDaysClosesAt,
      wkndOpensAt,
      wkndClosesAt,
      tipicalSeatingLength,
      chargeValue
    } = request.body
  
    const owner_id = request.headers.authorization
  
    const createdAt = new Date()

    const [id] = await connection('places').insert({
      createdAt,
      name,
      doctrine,
      whatsapp,
      geoLatitude,
      geoLongitude,
      fullCapacity,
      historyCheckedIns,
      rate,
      reviews,
      isAppPartner,
      needsAppointment,
      workingDaysOpensAt,
      workingDaysClosesAt,
      wkndOpensAt,
      wkndClosesAt,
      tipicalSeatingLength,
      chargeValue,
      owner_id
    })
    
    return response.json({ id, createdAt })
  },

  async delete(request, response) {
    const { id } = request.params
    const owner_id = request.headers.authorization

    const place = await connection('places')
      .where('id', id)
      .select('owner_id')
      .first()

    if (place.owner_id !== owner_id) {
      return response.status(401).json({ error: 'Operation not allowed'})
    }

    await connection('places').where('id', id).delete()

    return response.status(204).send()

  }
}