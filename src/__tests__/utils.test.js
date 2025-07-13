// Your tests here
import { pointsForWord } from "../utils";

describe("pointsForWord", () => {
    it("calculates the total points for a word (1 point per vowel, 2 per consonant)", () => {
        
        // Define test value
    const word = "test";

    // Pass test value as argument to pointsForWord()
    const points = pointsForWord(word);

    // Check that return value "points" is 7
    expect(points).toBe(7);
    })
})