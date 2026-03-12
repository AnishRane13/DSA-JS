// https://leetcode.com/problems/roman-to-integer/description/

var romanToInt = function (s) {
    const rom = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000,
    }

    let val = rom[s[s.length-1]]
    // console.log(val)

    for (let i = s.length - 2; i >= 0; i--) {
      if (rom[s[i]] < rom[s[i+1]]) {
        val -= rom[s[i]];  
        // console.log("val", val)
      } else {
        val += rom[s[i]]
      }
    }
    return val
};

console.log(romanToInt("MCMXCIV"))
console.log(romanToInt("III"))
console.log(romanToInt("LVIII"))