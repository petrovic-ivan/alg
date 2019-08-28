const LinearSearch = function() {

    const search = function (array, value) {
        for (let i = 0; i < array.length; i++) {
            if (array[i] === value) {
                return value;
            }
        }
    }

    this.search = search;
}


const array = [56, 46, 83, 66, 95, 92, 43];
console.log(new LinearSearch().search(array, 46))