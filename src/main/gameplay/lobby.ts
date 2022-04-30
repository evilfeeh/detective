import { DefaultEventsMap } from 'socket.io/dist/typed-events'
import PrepareRoomController from './prepare-rooms-controller'
import AvaliablePlayers from './available-players-controller'

export default class Lobby {
  private readonly io: DefaultEventsMap
  constructor (io: any) {
    this.io = io.connect()
  }

  prepareRoomToStart (): void {
    const prepareRoomController = new PrepareRoomController()
    const avaliablePlayers = new AvaliablePlayers()
    prepareRoomController.createRoom({ io: this.io })
    avaliablePlayers.getPlayer({ io: this.io })
  }
}
