let dice = (numDice) => {
  let result = "";
  for (let i = 0; i < numDice; i++) {
    result += Math.floor(Math.random() * 6 + 1) + ", ";
  }
  return "Rolled " + numDice + " dice: " + result.slice(0, -2);
};


console.log(dice(3));