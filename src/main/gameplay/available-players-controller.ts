import { Players } from './interfaces/players'

export default class AvaliablePlayers implements Players {
  getPlayer ({ io }): void {
    io.on('connection', socket => {
      console.log('player', socket.id)
    })
  }
}
