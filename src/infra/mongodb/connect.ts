import { MongoClient } from 'mongodb'

export default class connection {
  private readonly client: MongoClient
  constructor () {
    this.client = new MongoClient(process.env.MONGO_URI)
  }

  async connect (): Promise<MongoClient> {
    try {
      await this.client.connect()
      return this.client
    } catch (error) {
      await this.client.close()
    }
  }
}
