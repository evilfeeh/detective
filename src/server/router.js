import { Router } from 'express'
import Room from '../game/room.js'
// import { Player } from '../game/player.js'

const room = new Room()
const router = Router()

router.get('/', (req, res, next) => {
  res.send()
})

router.get('/rooms', (req, res, next) => {
  const rooms = room.getRooms()
  res.status(200).send(rooms)
})

router.post('/rooms', (req, res, next) => {
  const { roomName } = req.body
  const createdRoom = room.createRoom({ roomName })
  res.send(createdRoom)
})

// router.put('/rooms', (req, res, next) => {
//   res.send('bananan')
// })

// router.delete('/rooms', (req, res, next) => {
//   res.send('bananan')
// })

export default router
