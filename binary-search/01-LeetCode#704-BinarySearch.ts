// LeetCode #704 - Binary Search
// Given a sorted array of integers 'nums' and an integer 'target', return the index of 'target' if it exists in the array. Otherwise, return -1.

// You must implement the binary search algorithm.

// Example:
// Input: nums = [-1,0,3,5,9,12], target = 9
// Output: 4

function search(nums: number[], target: number): number {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return -1;
}

// Test your function:
console.log(search([-1,0,3,5,9,12], 9)); // 4
console.log(search([-1,0,3,5,9,12], 2)); // -1
