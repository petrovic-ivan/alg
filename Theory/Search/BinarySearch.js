const BinarySearch = (function () {

    function search(array, value) {
        let start = 0;
        let end = array.length;

        while (start < end) {
            const midpoint = Math.floor((start + end) / 2);
            if (array[midpoint] === value) {
                return midpoint;
            } else if (array[midpoint] < value) {
                start = midpoint + 1;
            } else {
                end = midpoint;
            }
        }
        return -1;
    }

    return { search };
}());


const array = [43, 46, 56, 66, 83, 92, 95];
console.log(BinarySearch.search(array, 56));