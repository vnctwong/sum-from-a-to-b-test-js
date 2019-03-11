function sum(fromN, toN) {
  // Sum all the values from fromN up to toN
  // base case = fromN
  if (fromN === toN) {
    return fromN;
    // increment until toN
  } else {
    return fromN + sum(fromN + 1, toN)
  }
}

module.exports = sum;
