import { DefaultEventsMap } from 'socket.io/dist/typed-events'
import PrepareRoomController from './prepare-rooms-controller'

export default class Lobby {
  private readonly io: DefaultEventsMap
  constructor (io: any) {
    this.io = io.connect()
  }

  prepareRoomToStart (): void {
    const prepareRoomController = new PrepareRoomController()
    prepareRoomController.createRoom({ io: this.io })
    prepareRoomController.leaveRoom({ io: this.io })
  }
}
