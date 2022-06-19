import { v4 as uuidv4 } from 'uuid'
import convertArrayToString from '../utils/convert-array-to-object.js'

export default class Room {
  constructor () {
    this.database = new Map()
  }

  getRooms () {
    const avaliableRooms = convertArrayToString(this.database)

    return {
      avaliableRooms
    }
  }

  createRoom ({ roomName }) {
    const roomId = uuidv4()
    this.database.set(roomId, { roomName, players: [] })
    return {
      roomId,
      roomName
    }
  }

  enterRoom () {
    return ''
  }

  leaveRoom () {
    return ''
  }
}
