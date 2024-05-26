export function shortenString(str: string, length = 25): string {
  if (str.length <= length) {
    return str
  } else {
    return str.slice(0, length) + '...'
  }
}
