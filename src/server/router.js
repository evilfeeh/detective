import { Router } from 'express'
import Room from '../game/room.js'
import Player from '../game/player.js'

const room = new Room()
const player = new Player()

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

router.get('/players', (req, res, next) => {
  const players = player.getPlayers()
  res.status(200).send(players)
})

router.post('/player', (req, res, next) => {
  const { playerName } = req.body
  const playerCreated = player.new({ playerName })
  res.send(playerCreated)
})

router.post('/player/rename', (req, res, next) => {
  const { hashId, playerName } = req.body
  const playerCreated = player.rename({ playerName, hashId })
  const statusCode = (!playerCreated.message) ? 200 : 404

  res.status(statusCode).send(playerCreated)
})

// router.put('/rooms/:id', (req, res, next) => {
//   res.send('bananan')
// })

// router.delete('/rooms', (req, res, next) => {
//   res.send('bananan')
// })

router.get('/detective', (req, res, next) => {
  res.send('Eu sou o Batman 🦇')
})

export default router
