// export function shortenString(str: string, length = 20): string {
//   return '...'
// }

export function shortenString(str: string, num: number) {
  if (str.length <= 25) {
    return str
  } else {
    return str.slice(0, num) + '...'
  }
}
