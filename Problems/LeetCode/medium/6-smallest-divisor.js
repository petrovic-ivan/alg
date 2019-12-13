var smallestDivisor = function(nums, threshold) {
    let left = 1, right = 10e6;
    while (left < right) {
        let divider = Math.floor((right + left) / 2);
        let sum = 0;
        for (let i = 0; i < nums.length; i++) 
            sum += Math.floor((nums[i] + divider - 1) / divider);
        if (sum > threshold)
            left = divider + 1;
        else 
            right = divider;
    }
    return left;
};

console.log(smallestDivisor([1,2,5,9], 6));
