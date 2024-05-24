// export function shortenString(str: string, length = 20): string {
//   return '...'
// }

export function shortenString(str: string, num: number) {
  if (str.length <= num) {
    return str
  } else {
    return str.slice(0, num) + '...'
  }
}

// Min förklaring på funktinen (Kolla gärna!)

// Export får den att fungera i andra filer. Gör det möjligt att exportera funktionen
// shortenSting är namnet på funktionen
// Inom parametrarna. str är den första parameterna och den tar emot en sträng
// num är den andra parametern och den tar emot ett nummer
// {} är själva kroppen på funktionen. och det är inom den själva logiken skrivs
// Sedan är där en if sats
// om str.lenght (alltså strängens längd) är mindre än numret (num) så retunerar vi strängen
// annars så retunerar vi strängen.
// här använder vi oss av slice vilket gör att man kan ta bort en del av strängen eller arrayen
// 0 betyder vart vi ska börja slica och num bestämmer till vart vi ska slica
// sedan lägger vi till '...' eftersom vi vill att det ska komma efter slicen

// När vi sedan kallar på funktionen i recipe-list-page så kan man säga att strängen blir descirption och nummer
// blir det vi väljer numret att vara. I detta fallet 25.
