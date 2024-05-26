// export function shortenString(str: string, length = 20): string {
//   return '...'
// }

export function shortenString(str: string, length = 25) {
  if (str.length <= length) {
    return str
  } else {
    return str.slice(0, length) + '...'
  }
}
