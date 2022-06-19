export default function convertArrayToString (iterableDatabase) {
  const data = []
  for (const iterable of iterableDatabase) {
    data.push(Object.assign({}, iterable))
  }
  return data
}
