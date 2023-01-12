/**
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function(word) {

    if (word === word.toUpperCase() || word === word.toLowerCase() || word === word[0].toUpperCase() + word.slice(1).toLowerCase()){
        return true;
    }
        return false;
  
  };