// var myAtoi = function (s) {
//   s = s.trim();

//   let isNeg = false;
//   let res = 0;
//   let val = 0;
//   let i = 0;

//     const INT_MIN = -(2**31);     
//   const INT_MAX = 2**31 - 1;

//   if (s[0] === '-') {
//     isNeg = true;
//     i++;
//   } else if (s[0] === '+') {
//     i++;
//   }


//   for (; i < s.length; i++) {
//     val = s.charCodeAt(i) - 48;

//     if (val >= 0 && val <= 9) {
//       res = res * 10 + val;
//     } else {
//       break;
//     }
//   }

//   if (isNeg) {
//     res = -res;
//   }

//    if (res < INT_MIN) return INT_MIN;
//   if (res > INT_MAX) return INT_MAX;

//   return res;
// };

// console.log(myAtoi("-91283472332"));







function deepClone(obj) {
  if (obj === null || typeof obj !== 'object') {
    return obj;
  }

  if (Array.isArray(obj)) {
    return obj.map((item)=>deepClone(item))
  }

  let result = {};

  for(key in obj){
    result[key] = deepClone(obj[key])
  }
  return result;
}

const original = { name: "John", nested: { age: 30 } };
const cloned = deepClone(original);
console.log(cloned)

