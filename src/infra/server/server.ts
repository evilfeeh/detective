import express from 'express'
import router from './router'
import { Server } from 'http'
import Socketio from '../socket.io/socket'
import Lobby from '../../main/gameplay/lobby'

const app = express()
app.use(router)

const server = new Server(app)
const io = new Socketio(server)

const lobby = new Lobby(io)
lobby.prepareRoomToStart()

server.listen(process.env.PORT, () => {
  console.log(`app is listen into ${process.env.PORT}`)
})
