function reverseVowels(s: string): string {
  const vocales = new Set(["a", "e", "i", "o", "u"]);
  let left = 0;
  let right = s.length - 1;
  const chars = s.split("");

  while (left < right) {
    if (!vocales.has(chars[left].toLowerCase())) {
      left++;
    } else if (!vocales.has(chars[right].toLowerCase())) {
      right--;
    } else {
      const temp = chars[left];
      chars[left] = chars[right];
      chars[right] = temp;
      left++;
      right--;
    }
  }
  return chars.join("");
}
