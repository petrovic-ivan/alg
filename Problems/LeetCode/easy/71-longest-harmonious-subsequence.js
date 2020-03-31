var findLHS = function(nums) {
    const counter = {};
    for (let i = 0; i < nums.length; i++) {
        if (counter[nums[i]]) counter[nums[i]]++;
        else counter[nums[i]] = 1;
    }
    
    const keys = Object.keys(counter).sort((a, b) => a - b);
    if (keys.length === 1) return 0;

    let max = 0;
    for (let i = 1; i < keys.length; i++) {
        if (keys[i] - keys[i - 1] === 1) {
            if (max < (counter[keys[i]] + counter[keys[i - 1]])) 
                max = counter[keys[i]] + counter[keys[i - 1]];
        }
    }
    return max;
};

console.log(findLHS([1,3,2,2,5,2,3,7]));