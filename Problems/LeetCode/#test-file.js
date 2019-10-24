var removeSubfolders = function(folder) {
    const subfolders = new Set();
    for (let i = 0; i < folder.length; i++) {
        for (let j = 0; j < folder.length; j++) {
            let sub = folder[j].substring(folder[i].length );
            if (folder[j].includes(folder[i]) && j !== i && sub[0] && sub[0] === '/') {
                subfolders.add(j);
            }
        }
    }
    const arr = [];
    for (let i = 0; i < folder.length; i++) {
        if (!subfolders.has(i)) {
            arr.push(folder[i]);
        }
    }
    
    return arr;
};

console.log('Result: ', removeSubfolders(["/a","/a/b","/c/d","/c/d/e","/c/f"]), ' Expected: ["/a","/c/d","/c/f"]');