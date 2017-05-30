function countLetters(str) {

  var noSpaces = str.split(" ").join("");

  var letterTotals = {};

  for (i = 0; i < noSpaces.length; i++) {

    var key = noSpaces[i];
    var currentCount;

    if (letterTotals[key]) {
      letterTotals[key] += 1;
    } else {
      letterTotals[key] = 1;
    }
  }
return letterTotals;
}

console.log(countLetters("lighthouse in the house"));