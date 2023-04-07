module.exports = Phrase;

// Adds `reverse` to all strings.
String.prototype.reverse = function() {
  return Array.from(this).reverse().join("");
}

// Adds a "last" method to all arrays.
Array.prototype.last = function() {
  return this.pop();
}

// Adds a 'blank' method to all strings
String.prototype.isBlank = function() {
  if (this.match(/^\s*$/)) {
  // if (/^\s*$/.test(this)) {  // alternative version to matching regex
    return true;
  } else {
    return false;
  }
}

// Defintes a phrase object
function Phrase(content) {
  this.content = content;
  
  // Returns content processed for palindrome testing
  this.processedContent = function processedContent() {
    return this.letters().toLowerCase();
  }

  // Returns the letters in the content
  this.letters = function letters() {
    return (this.content.match(/[a-z]/gi) || []).join("");

    // // 2nd solution
    // return Array.from(this.content).filter(c => c.match(/[a-z]/i)).join("");
    
    // // 1st solution
    // let theLetters = [];
    // const letterRegex = /[a-z]/i;
    // Array.from(this.content).forEach(function(character) {
    //   if (character.match(letterRegex)) {
    //     theLetters.push(character);
    //   }
    // });
    // return theLetters.join("");
  }
  
  // Returns true for palindrome, false if not
  this.palindrome = function palindrome() {
    return this.processedContent() === this.processedContent().reverse();
  }

}

// // Defines a Translated Phrase object
// function TranslatedPhrase (content, translation) {
//   this.content = content;
//   this.translation = translation;

//   // Returns content processed for palindrome testing
//   this.processedContent = function processedContent() {
//     return this.processor(this.translation);
//   }  
// }

// TranslatedPhrase.prototype = new Phrase();

// // Returns true for palindrome, false if not
// function palindrome(string) {
//   let processedContent = string.toLowerCase();
//   return processedContent === reverse(processedContent);
// }


// // function emailParts(email) {
//   let emailProcessed = email.toLowerCase();
//   return email.split("@");
// }