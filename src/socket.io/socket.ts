import { Server } from 'socket.io'
import { DefaultEventsMap } from 'socket.io/dist/typed-events'

export default class Socket {
  private readonly io: Server<DefaultEventsMap, any>
  constructor (server: any) {
    this.io = new Server(server)
  }

  connect (): void {
    this.io.on('connection', (socket) => {
      console.log('user connected', socket.id)
    })
  }
}
