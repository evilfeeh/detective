import { home } from './interfaces/home'

export default class PrepareRoomController implements home {
  createRoom ({ io }): void {
    io.on('connection', (socket) => {
      console.log('join', socket.id)
      socket.join(socket.id)
    })
  }

  leaveRoom ({ io }): void {
    io.on('connection', (socket) => {
      console.log('leave', socket.id)
      socket.leave(socket.id)
    })
  }

  closeRoom (): void {

  }
}
