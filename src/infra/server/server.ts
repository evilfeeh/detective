import express from 'express'
import router from './router'
import { Server } from 'http'
import Socketio from '../socket.io/socket'
import Lobby from '../../main/gameplay/lobby'

const app = express()

const server = new Server(app)
const io = new Socketio(server)
const lobby = new Lobby(io)
lobby.createPlayersRoom()

app.use(router)

server.listen(process.env.PORT, () => {
  console.log(`app is listen into ${process.env.PORT}`)
})
