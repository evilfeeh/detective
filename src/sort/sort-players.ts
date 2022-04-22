import { sort } from './protocols/sort'
import utils from '../utils/arrays.tools'

export class Round implements sort {
  private bag = ['assassino', 'detetive']
  constructor (players: number) {
    for (let index = 0; index < players - 2; index++) {
      this.bag.push('vitima')
    }
  }

  sortition (): string {
    const random = Math.floor(Math.random() * this.bag.length)
    const paper = this.bag[random]
    this.bag = utils.removeFromArray(random, this.bag)

    return paper
  }
}
