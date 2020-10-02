Problem Statement : A palindrome is a word or phrase that reads the same backward as forward. Write a function that checks for this.

Code : 

describe("Palindrome", () => {
 it("Should return true", () => {
  assert.equal(isPalindrome("Cigar? Toss it in a can. It is so tragic"), true);
 });
 it("Should return false", () => {
  assert.equal(isPalindrome("sit ad est love"), false);
 });
});
