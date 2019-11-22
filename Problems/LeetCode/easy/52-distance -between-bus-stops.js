/*

A bus has n stops numbered from 0 to n - 1 that form a circle. 
We know the distance between all pairs of neighboring stops where distance[i] is the distance between the stops number i and (i + 1) % n.

The bus goes along both directions i.e. clockwise and counterclockwise.

Return the shortest distance between the given start and destination stops.

*/

let distanceBetweenBusStops = function (distance, start, destination) {
    let c_in = 0;
    let c_out = 0;
    for (let i = start; i != destination; i = (i + 1) % distance.length) 
        c_in += distance[i];
    for (let i = destination; i != start; i = (i + 1) % distance.length) 
        c_out += distance[i];
    return Math.min(c_out, c_in);
};

console.log('Example 1: Result - ' + distanceBetweenBusStops([1, 2, 3, 4], 0, 1) + ' Expected: 1');
console.log('Example 2: Result - ' + distanceBetweenBusStops([1, 2, 3, 4], 0, 2) + ' Expected: 3');
console.log('Example 3: Result - ' + distanceBetweenBusStops([1, 2, 3, 4], 0, 3) + ' Expected: 4');
console.log('Example 4: Result - ' + distanceBetweenBusStops([7,10,1,12,11,14,5,0], 7, 2) + ' Expected: 17');
