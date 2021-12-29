const express = require('express')
const router = express.Router()
const QuestionController = require('./controllers/QuestionController')
const RoomController = require('./controllers/RoomController')

router.get('/', (req, res) => {
    res.render('home', {page: 'enter-room'})
})

router.get('/criar-sala', (req, res) => {
    res.render('home', {page: 'create-pass'})
})

router.get('/sala', (req, res) => {
    res.render('room')
})

router('sala/:room', (req, res) => res.render("room"))

router.post('/sala/:room/:question/:action', QuestionController.index)
router.post('/sala/criar-sala', RoomController.create)

module.exports = router