let assert = require("assert");
let Phrase = require("../index.js");
// let palindrome = require("./index.js");

describe("Phrase", function() {

  describe("#palindrome", function() {

    it("should return false for a non-palindrome", function() {
      let nonPalindrome = new Phrase("apple");
      assert(!nonPalindrome.palindrome());
    });

    it("should return true for a plain palindrome", function() {
      let plainPalindrome = new Phrase("racecar");
      assert(plainPalindrome.palindrome());
    });

    it("should return true for a mixed-case palindrome", function() {
      let mixedCasePalindrome = new Phrase("RaceCar");
      assert(mixedCasePalindrome.palindrome());
    });

    it("should return true for a palindrome with punctuation", function() {
      let punctuatedPalidrome = new Phrase("Madam, I'm Adam.");
      assert(punctuatedPalidrome.palindrome());
    });

    it("should return false for a null phrase", function() {
      let nullPalidrome = new Phrase("1234.56");
      assert(!nullPalidrome.palindrome());
    });

  });

  describe("#letters", function() {
    it("should return only letters", function() {
      let punctuatedPalidrome = new Phrase("Madam, I'm Adam.");
      // assert(punctuatedPalidrome.letters() === "MadamImAdam");
      assert.strictEqual("MadamImAdam", punctuatedPalidrome.letters());
    });
  });

});