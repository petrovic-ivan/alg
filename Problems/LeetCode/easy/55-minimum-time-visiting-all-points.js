let minTimeToVisitAllPoints = function(points) {
    let result = 0;
    for (let i = 1; i < points.length; i++) {
        let x = Math.abs(points[i][0] - points[i - 1][0]);
        let y = Math.abs(points[i][1] - points[i - 1][1]);
        result += Math.max(x, y);
    }
    return result;
};

console.log(minTimeToVisitAllPoints([[1,1],[3,4],[-1,0]]));
console.log(minTimeToVisitAllPoints([[3,2],[-2,2]]));