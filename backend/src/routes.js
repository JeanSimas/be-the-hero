const express = require('express')
const router = express.Router()

const OngController = require('./controllers/OngController')
const IncidentController = require('./controllers/IncidentController')
const ProfileController = require('./controllers/ProfileController')
const SessionController = require('./controllers/SessionController')

router.post('/sessions', SessionController.create)
router.post('/ongs', OngController.create)

router.get('/ongs', OngController.index)


router.post('/incidents', IncidentController.create)

router.get('/incidents', IncidentController.index)

router.delete('/incidents/:id', IncidentController.delete)

router.get('/profile', ProfileController.index)
module.exports = router