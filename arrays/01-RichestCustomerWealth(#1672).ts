function maximumWealth(accounts: number[][]): number {
  return accounts.reduce((max, curr) => {
    const sum = curr.reduce((a, b) => a + b, 0);
    return Math.max(max, sum);
  }, 0);
}

