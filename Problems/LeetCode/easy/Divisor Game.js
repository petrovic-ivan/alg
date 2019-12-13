var divisorGame = function(N) {
    
    let win = false;
    for (let i = N - 1; i > 0; i--) {
        if (N % i === 0 && i > 0 && i < N) {
            win = !win; 
            N -= i;
        }
    }
    return win;
};

console.log(divisorGame(3));