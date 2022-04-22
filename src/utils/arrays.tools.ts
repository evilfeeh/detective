export default {
  removeFromArray (paperIndex: number, array: string[]): string[] {
    const newArray = []
    for (let index = 0; index < array.length; index++) {
      if (paperIndex !== index) {
        newArray.push(array[index])
      }
    }
    return newArray
  }
}
