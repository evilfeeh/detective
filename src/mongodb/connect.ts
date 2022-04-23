import { MongoClient } from 'mongodb'

const client = new MongoClient(process.env.MONGO_URI)

export default async function run (): Promise<void> {
  try {
    await client.connect()
    const detective = await client.db('detective')
    await detective.collection('players').find()
  } catch (error) {
    await client.close()
  }
}
