var longestConsecutive = function (nums) {
   const set = new Set(nums);
   let streak = 0;

   for(let num of set){
      if (!set.has(num - 1)) {
         let count = 1;
         let curr = num

         while (set.has(curr+1)) {
            curr++;
            count++;
         }
         streak = Math.max(streak,count)
      }
   }
   return streak;
}; 

console.log(longestConsecutive([2, 20, 4, 10, 3, 4, 5]))