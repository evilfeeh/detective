import MongoConnection from '../mongodb/connect'
import { players } from '../mongodb/protocols/players'

export class Players implements players {
  private readonly client: any
  constructor () {
    const mongo = new MongoConnection()
    this.client = mongo.connect()
  }

  async getPlayer (id: string): Promise<any> {
    const detective = await this.client.db('detective')
    await detective.collection('players').findOne({ socket: id })
  }

  async getPlayers (): Promise<any> {
    const detective = await this.client.db('detective')
    await detective.collection('players').find()
  }

  async insertPlayer (player: object): Promise<void> {

  }
}
