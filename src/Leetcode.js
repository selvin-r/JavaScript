//53. Maximum Subarray (07-10-2025)======================================
//Solved
//        Medium
//Topics
//premium lock icon
//        Companies
//Given an integer array nums, find the subarray with the largest sum, and return its sum.
//
//
//
//Example 1:
//
//Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
//Output: 6
//Explanation: The subarray [4,-1,2,1] has the largest sum 6.
//Example 2:
//
//Input: nums = [1]
//Output: 1
//Explanation: The subarray [1] has the largest sum 1.
//Example 3:
//
//Input: nums = [5,4,-1,7,8]
//Output: 23
//Explanation: The subarray [5,4,-1,7,8] has the largest sum 23.
//

function Maximum(nums) {
  let curSum = nums[0];
  let maxSum = nums[0];

  for (let i = 1; i < nums.length; i++) {

    curSum = Math.max(nums[i], curSum + nums[i]);

    maxSum = Math.max(maxSum, curSum);
  }

  return maxSum;
}

// Example test cases:
console.log(Maximum([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
console.log(Maximum([1]));
console.log(Maximum([5, 4, -1, 7, 8]));




// 2665. Counter II
// Solved
// Easy
// premium lock icon
// Companies
// Hint
// Write a function createCounter. It should accept an initial integer init. It should return an object with three functions.
//
// The three functions are:
//
// increment() increases the current value by 1 and then returns it.
// decrement() reduces the current value by 1 and then returns it.
// reset() sets the current value to init and then returns it.
//
//
// Example 1:
//
// Input: init = 5, calls = ["increment","reset","decrement"]
// Output: [6,5,4]
// Explanation:
// const counter = createCounter(5);
// counter.increment(); // 6
// counter.reset(); // 5
// counter.decrement(); // 4
// Example 2:
//
// Input: init = 0, calls = ["increment","increment","decrement","reset","reset"]
// Output: [1,2,1,0,0]
// Explanation:
// const counter = createCounter(0);
// counter.increment(); // 1
// counter.increment(); // 2
// counter.decrement(); // 1
// counter.reset(); // 0
// counter.reset(); // 0


function createCounter(init) {
  let num = init;

  return {
    increment: function() {
      return ++num;
    },
    decrement: function() {
      return --num;
    },
    reset: function() {
      num = init;
      return num;
    }
  };
}

const counter = createCounter(5);

console.log(counter.increment()); // 6
console.log(counter.reset());     // 5
console.log(counter.decrement()); // 4
