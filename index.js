function isPalindrome(string) {
  // Write your algorithm here
  const stringToArray = string.split('')

  const reverseArray = stringToArray.reverse()

  const joinToString = reverseArray.join('') 

  if (joinToString == string){
    return true;
  }else {
    return false;
  }

}

/* 
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
