var romanToInt = function (s) {
  const romanToValue = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  let sum = 0;

  for (let i = 0; i < s.length; i++) {
        const curr = romanToValue[s[i]]
        const next = romanToValue[s[i+1]]

        if (next > curr) {
            sum += next-curr;
            i++;
        }else{
            sum += curr
        }
  }

  return sum
};


console.log(romanToInt("MCMXCIV"))