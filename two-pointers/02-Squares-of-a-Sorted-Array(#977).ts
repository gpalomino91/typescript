function sortedSquares(nums: number[]): number[] {
  let left = 0;
  let right = nums.length - 1;
  const result = new Array(nums.length);
  let pos = nums.length - 1;

  while (left <= right) {
    const leftVal = nums[left] ** 2;
    const rightVal = nums[right] ** 2;

    if (leftVal > rightVal) {
      result[pos] = leftVal;
      left++;
    } else {
      result[pos] = rightVal;
      right--;
    }
    pos--;
  }
  return result;
}
