var relativeSortArray = function(arr1, arr2) {
    const count = [];
    for (let i = 0; i < arr1.length; i++) {
        if (!count[arr1[i]]) count[arr1[i]] = 1
        else count[arr1[i]]++;
    }
    let latest = 0;
    for (let i = 0; i < arr2.length; i++) {
        const num = arr2[i];
        while (count[num] > 0) {
            arr1[latest] = num;
            count[num]--;
            latest++;
        }
    }
    for (let i = 0; i < count.length; i++) {
        if (count[i] > 0) {
            arr1[latest] = i;
            latest++;
        }
    }
    return arr1;
};

console.log(relativeSortArray([28,6,22,8,44,17],
    [22,28,8,6]));
