export function shortenString(str: string, length = 25): string {
  if (str.length <= length) {
    return str
  } else {
    return str.slice(0, length) + '...'
  }
}

export function detailedCookingTime(hours: number, minutes: number) {
  if (hours === 0) {
    return minutes + 'm'
  } else {
    return hours + minutes
  }
}
