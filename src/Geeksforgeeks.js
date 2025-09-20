// MeetingRooms 2 ============================================>

class Solution {
  Meeting() {
    let start = [1, 10, 7];
    let end = [4, 15, 10];

    start.sort((a, b) => a - b);
    end.sort((a, b) => a - b);

    let room = 0;
    let maxRoom = 0;
    let i = 0, j = 0;

    while (i < start.length && j < end.length) {
      if (start[i] < end[j]) {
        room++;
        maxRoom = Math.max(maxRoom, room);
        i++;
      } else {
        room--;
        j++;
      }
    }

     // console.log("Max rooms needed:", maxRoom);
    return maxRoom;


  }
}
let s = new Solution();
s.Meeting();
console.log(s.Meeting());


// Meeeting 1 ============================================>

class Solution1 {
  Meeting() {
    let arr = [
      [1, 4],
      [10, 15],
      [7, 10]
    ];


    arr.sort((a, b) => a[0] - b[0]);

    for (let i = 1; i < arr.length; i++) {

      if (arr[i][0] < arr[i - 1][1]) {
        return false;
      }
    }

    return true;
  }
}

let b = new Solution1();
console.log(b.Meeting());


// 1. Write a Program to reverse a string in JavaScript.==============================================

function reverseString(str)
{
  return str.split("").reverse().join("");
}

console.log(reverseString("selvin"));


// 2. Write a Program to check whether a string is a palindrome string.================================

function isPalindrome(str) {
  const reversed = str.split("").reverse().join("");
  return str === reversed;
}

console.log(isPalindrome("GFG"));

// 3. Find the largest number in an array in JavaScript.====================================================

function findLargest(arr)  {

  let largest = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > largest) {

      largest = arr[i];
    }
  }
  return largest;
}

console.log(findLargest([99, 5, 3, 100, 1]));