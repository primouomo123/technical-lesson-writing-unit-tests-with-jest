// Your code here
export function pointsForWord(word) {
  let points = 0;
  for (const char of word) {
    points += /[aeiou]/.test(char) ? 1 : 2;
  }
  return points;
}