// https://neetcode.io/problems/eating-bananas/question

function minEatingSpeed(piles, h) {
    let minSpeed = 1, maxSpeed = Math.max(...piles);
    let ans = 0;

    while (minSpeed <= maxSpeed) {
        let mid = Math.floor((minSpeed + maxSpeed)/2);
        
        let totalTime = 0;
        for(let p of piles){
         totalTime += Math.ceil((p/mid));
        }

        
        if (totalTime <= h) {
            ans = mid;
            maxSpeed = mid - 1;
        }else{
            minSpeed = mid + 1;
        }
    }
    return ans
}

console.log(minEatingSpeed([1, 4, 3, 2], 9))