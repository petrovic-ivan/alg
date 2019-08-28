const BucketSort = function () {


    const _hash = function (value) {
        return Math.floor(value / 10);
    }

    const sort = function (input) {

        const buckets = new Array(10);

        for (let i = 0; i < buckets.length; i++) {
            buckets[i] = new Array();
        }

        for (let i = 0; i < input.length; i++) {
            buckets[_hash(input[i])].push(input[i]);
        }

        for (let i = 0; i < buckets.length; i++) {
            buckets[i].sort((a, b) => a - b);
        }

        let index = 0;
        for (let i = 0; i < buckets.length; i++) {
            for (let j = 0; buckets[i].length > 0 && j < buckets[i].length; j++) {
                input[index++] = buckets[i][j];
            }
        }
    }

    return { sort }

}

const bucketSort = new BucketSort();
const array = [56, 46, 83, 66, 95, 92, 43];
bucketSort.sort(array);

for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
}