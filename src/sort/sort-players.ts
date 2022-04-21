
export class Round {
  private readonly bag = ['assassino', 'detetive']
  constructor({ players }) {
    for (let index = 0; index < players - 2; index++) {
      this.bag.push('vitima')
    }
  }
  sortition() {
    const random = Math.floor(Math.random() * this.bag.length)
    return this.bag[random]
  }
}