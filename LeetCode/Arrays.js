const maxProfit = (prices) => {
  let totalProfit = 0;
  const length = prices.length;
  const set = new Set([0, 1]);

  if(set.has(length)) {
    return totalProfit;
  }

  for(let i = 1; i < length; i += 1) {
    if(prices[i - 1] < prices[i]) {
      totalProfit += prices[i] - prices[i - 1];
    }
  }
  return totalProfit;
};
