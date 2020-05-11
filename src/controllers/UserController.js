const crypto = require('crypto')
const connection = require('../database/connection')

module.exports = {

  async index(request, response) {
    const users = await connection('users').select('*')

    return response.json(users)
  },
  
  async create(request, response) {
    const { 
      email,
      name,
      gender,
      country,
      uf,
      city,
      whatsapp,
      password,
      bio,
      avatarImg,
      meditationLength,
      meditationFavorites
    } = request.body
  
    const id = crypto.randomBytes(4).toString('HEX')
    const createdAt = new Date()
  
    await connection('users').insert({
      id,
      createdAt,
      email,
      name,
      gender,
      country,
      uf,
      city,
      whatsapp,
      password,
      bio,
      avatarImg,
      meditationLength,
      meditationFavorites
    })
    
    return response.json({ id, createdAt })
  }
}