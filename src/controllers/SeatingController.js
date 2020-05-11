const connection = require('../database/connection')

module.exports = {

  async index(request, response) {
    const seatings = await connection('seatings').select('*')

    return response.json(seatings)
  },
  
  async create(request, response) {
    const { 
      lengthTarget,
      accomplishmentRate,
      seatersSync,
      geoLatitude,
      geoLongitude,
    } = request.body

    const user_id = request.headers.authorization
  
    const createdAt = new Date()
  
    const [id] = await connection('seatings').insert({
      createdAt,
      lengthTarget,
      accomplishmentRate,
      seatersSync,
      geoLatitude,
      geoLongitude,
      user_id
    })
    
    return response.json({ id, createdAt })
  },

  async delete(request, response) {
    const { id } = request.params
    const user_id = request.headers.authorization

    const seating = await connection('seatings')
      .where('id', id)
      .select('user_id')
      .first()

    if (seating.user_id !== user_id) {
      return response.status(401).json({ error: 'Operation not allowed'})
    }

    await connection('seatings').where('id', id).delete()

    return response.status(204).send()

  }
}
