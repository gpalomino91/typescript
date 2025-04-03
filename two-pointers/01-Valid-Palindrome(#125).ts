function isPalindrome(s: string): boolean {
  const esAlfanumerico = (c: string): boolean => /^[a-z0-9]$/i.test(c);
  let left = 0;
  let right = s.length - 1;

  while (left < right) {
    if (!esAlfanumerico(s[left])) {
      left++;
      continue;
    }
    if (!esAlfanumerico(s[right])) {
      right--;
      continue;
    }
    if (s[left].toLowerCase() !== s[right].toLowerCase()) return false;
    left++;
    right--;
  }
  return true;
}
