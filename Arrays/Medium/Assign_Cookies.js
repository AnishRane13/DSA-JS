// https://leetcode.com/problems/assign-cookies/description/


var findContentChildren = function(g, s) {
     g.sort((a,b)=>a-b);
    s.sort((a,b)=>a-b);

    let i = 0;
    let j = 0;

    while(i < g.length && j < s.length){
        if(g[i] <= s[j]){
            i++;
        }
        j++;
    }
    return i;
};

console.log(findContentChildren([1,2,3],[1,1]))