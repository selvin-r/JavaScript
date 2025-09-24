// Problem of the Day: Remove Duplicate Characters and Digits with Different Rules
//You are given a string s consisting of lowercase English letters and digits (0–9).
//You must transform the string in two steps:
//Characters (a–z):
//Traverse from left to right.
//Keep only the first occurrence of each character.
//Remove all later duplicates.
//Digits (0–9):
//Traverse from right to left.
//Keep only the first digit you encounter (the rightmost occurrence in the original string).
//Remove earlier duplicates.
//Return the final transformed string.

// 1.Input: programming123321
//After Step1: progamin123321
//Final: progamin321
//(keeps the rightmost 1,2,3 — final digits appear as the left-to-right order of their last occurrences)   (16-09-2025)====

class Solution {
  Remov(){

    let input = "programming123321";


   selvin : for(let i=0;i<input.length;i++){

      if(input.charAt(i) >=97 && input.charAt(i) <=122){

        for(let j=0;j<i;j++){

          if(input.charAt(j)==input.charAt(i)){
            continue selvin;
          }
        }
        console.log(input.charAt(i));
      } else {
        for(let j=i+1;j<input.length;j++){

          if(input.charAt(j)==input.charAt(i)){
            continue selvin;
          }

        }
         console.log(input.charAt(i));
      }
    }

  }

}

let s = new Solution();
s.Remov();
// console.log(s.Remov());


// 55 Qustion (22-09-2025) Palindrom

function isPalindrome(word) {
  let i = 0;
  let j = word.length - 1;
  while (i < j) {
    if (word[i] !== word[j]) {
      return false;
    }
    i++;
    j--;
  }
  return true;
}

function printNonPalindromeWords(s) {
  const words = s.split(" ");
  let result = "";
  for (const word of words) {
    if (!isPalindrome(word)) {
      result += word;
    }
  }
  console.log(result);
}

printNonPalindromeWords("he know malayalam");


// 56 Qustions (23-09-2025) Remove String

function removeChars(s1, s2) {
  let result = "";
  let lookup = {};


  for (let i = 0; i < s2.length; i++) {
    let ch = s2[i];
    lookup[ch] = true;
  }


  for (let i = 0; i < s1.length; i++) {
    let ch = s1[i];
    if (!lookup[ch]) {
      result += ch;
    }
  }

  return result;
}

let s1 = "expErience";
let s2 = "En";
console.log("Remove" +removeChars(s1, s2));

