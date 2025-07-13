// Your code here
export function pointsForWord(word) {
  let points = 0;
  for (const char of word) {
    if (["a", "e", "i", "o", "u"].includes(char)) {
      points += 1;
    } else {
      points += 2;
    }
  }
  return points;
}