import { v4 as uuidv4 } from 'uuid'
import convertArrayToString from '../utils/convert-array-to-object.js'

export default class Player {
  constructor () {
    this.database = new Map()
  }

  new ({ playerName }) {
    this.database.set(uuidv4(), { playerName })
    return {
      newPlayer: true,
      playerName
    }
  }

  rename ({ playerName, hashId }) {
    const player = this.database.get(hashId)
    if (!player) {
      return {
        updated: false,
        message: 'hashId not found'
      }
    }
    this.removeFromDatabase(hashId)

    player.playerName = playerName
    this.database.set(hashId, player)
    return {
      updated: false,
      playerRenamed: true,
      player
    }
  }

  getPlayers () {
    const iterableDatabase = this.database[Symbol.iterator]()
    const playersAvaliable = convertArrayToString(iterableDatabase)

    return {
      playersAvaliable
    }
  }

  removeFromDatabase ({ hashId }) {
    this.database.delete(hashId)
  }
}
