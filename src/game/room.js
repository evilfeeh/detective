import { v4 as uuidv4 } from 'uuid'
import convertArrayToString from '../utils/convert-array-to-object.js'

export default class Room {
  constructor () {
    this.database = new Map()
  }

  getRooms () {
    const rooms = this.database[Symbol.iterator]()
    const avaliableRooms = []

    for (const room of rooms) {
      avaliableRooms.push(convertArrayToString(room))
    }

    return {
      avaliableRooms
    }
  }

  createRoom ({ roomName }) {
    const roomId = uuidv4()
    this.database.set(roomId, { roomName })
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
