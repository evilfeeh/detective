import { Server } from 'socket.io'
import { DefaultEventsMap } from 'socket.io/dist/typed-events'

export default class Socket {
  private readonly io: Server<DefaultEventsMap, any>
  constructor (server: any) {
    this.io = new Server(server)
  }

  connect (): any {
    return this.io
  }
}
