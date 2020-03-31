var findLengthOfLCIS = function(nums) {
    let longest = 0, start = 1;
    while (longest <= nums.length - start) {
        let count = 1;
        for (let i = start; i < nums.length; i++) {
            if (nums[i] <= nums[i - 1]) {
                start = i + 1;
                break;
            }
            count++;            
        }
        if (longest < count) longest = count;
    }
    return longest;
};

console.log(findLengthOfLCIS([2,2,2,2,2]));