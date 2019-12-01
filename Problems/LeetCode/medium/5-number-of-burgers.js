var numOfBurgers = function(tomatoSlices, cheeseSlices) {
    if ((tomatoSlices / cheeseSlices) < 2) return [];
    if (tomatoSlices % 2 !== 0) return [];
    if (tomatoSlices / 4 > cheeseSlices) return [];
    let small = tomatoSlices / 2;
    const rest = small - cheeseSlices;
    return [rest, small - rest * 2];
};

console.log(numOfBurgers(2, 1));