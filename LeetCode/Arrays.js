const numJewelsandStones = (jewels, stones) => {
  const jewelsSet = new Set(jewels);
  let stonesCounter = 0;
  for (let i = 0; i < stones.length; i += 1) {
    stonesCounter += jewelsSet.has(stones[i]) ? 1 : 0;
  }
  return stonesCounter;
};



console.log(numJewelsandStones)