function backspaceCompare(s: string, t: string): boolean {
  const build = (str: string): string[] => {
    const stack: string[] = [];
    for (let char of str) {
      char === '#' ? stack.pop() : stack.push(char);
    }
    return stack;
  };

  return build(s).join("") === build(t).join("");
}
