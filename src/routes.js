const express = require('express')

const UserController = require('./controllers/UserController')
const SeatingController = require('./controllers/SeatingController')
const ProfileController = require('./controllers/ProfileController')
const SessionController = require('./controllers/SessionController')
const PlacesController = require('./controllers/PlacesController')
const ScheduleController = require('./controllers/ScheduleController')

const routes = express.Router()

routes.post('/sessions', SessionController.create)

routes.get('/users', UserController.index)
routes.post('/users', UserController.create)
// routes.delete('/users/:id', UserController.delete)

routes.get('/profile', ProfileController.index)

routes.get('/seatings', SeatingController.index)
routes.post('/seatings', SeatingController.create)
routes.delete('/seatings/:id', SeatingController.delete)

routes.get('/places', PlacesController.index)
routes.post('/places', PlacesController.create)
routes.delete('/places/:id', PlacesController.delete)

routes.get('/schedule', ScheduleController.index)
routes.post('/schedule', ScheduleController.create)
routes.delete('/schedule/:id', ScheduleController.delete)

module.exports = routes
