var reverseWords = function (s) {
    let str = "";
    s = s.trim();
    const items = [];


    for (let i = 0; i < s.length; i++) {
        if (s[i] === " ") {
            if (str !== "") {
                items.push(str);
                str = "";
            }
        } else {
            str += s[i];
        }
    }
    items.push(str)
    str = "";

    while (items.length > 0) {
        let elem = items.pop();
        str += elem + " ";
    }
    return str.trim()
};

// console.log(reverseWords("a good   example"))

// var reverseWords = function(s) {
//     let str = "";
//     const items = [];

//     let result = s.split(/\s+/);

//     while (result.length > 0) {
//      str += result.pop() + " ";
//     //  console.log(str)
//     }
//     return str.trim()
// };

console.log(reverseWords("a good   example"))