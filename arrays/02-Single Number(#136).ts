function singleNumber(nums: number[]): number {
  const map = new Map<number, number>();
  for (let n of nums) {
    map.set(n, ( (map.get(n) ?? 0) + 1));
  }
  for (let [key, val] of map.entries()) {
    if (val === 1) return key;
  }
  return -1;
}
