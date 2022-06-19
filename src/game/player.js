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

  rename () {
    return ''
  }

  getPlayers () {
    const iterableDatabase = this.database[Symbol.iterator]()
    const playersAvaliable = convertArrayToString(iterableDatabase)

    return {
      playersAvaliable
    }
  }
}
