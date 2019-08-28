const HashFunction = (function () {

    const _hash = (v, k) => Math.abs(v % k);

    const run = function () {
        const nums = new Array(10);
        const numsToAdd = [59382, 43, 6894, 500, 99, -58];

        for (let i = 0; i < numsToAdd.length; i++) {
            const value = numsToAdd[i];
            const index = _hash(value, nums.length);
            nums[index] = value;
        }

        for (let i = 0; i < nums.length; i++) {
            console.log(nums[i]);
        }
    }

    return { run };
}());

HashFunction.run();
