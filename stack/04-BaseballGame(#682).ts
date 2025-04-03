function calPoints(ops: string[]): number {
  const stack: number[] = [];
  for (let op of ops) {
    if (op === "+") {
      stack.push(stack[stack.length - 1] + stack[stack.length - 2]);
    } else if (op === "D") {
      stack.push(stack[stack.length - 1] * 2);
    } else if (op === "C") {
      stack.pop();
    } else {
      stack.push(parseInt(op));
    }
  }
  return stack.reduce((a, b) => a + b, 0);
}
