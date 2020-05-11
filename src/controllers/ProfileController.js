const connection = require('../database/connection')

module.exports = {

  async index(request, response) {
    const id = request.headers.authorization
    const test = request.body

    const users = await connection('users')
      .where('id', id)
      .select('*')

    return response.json(users)
    
  }
}
