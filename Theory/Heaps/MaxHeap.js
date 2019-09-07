const MaxHeap = function (capacity) {

    let heap = new Array(capacity);
    let size = 0;

    const _fixHeapAbove = (index) => {
        const addedValue = heap[index];
        while (index > 0 && addedValue > heap[_getParent(index)]) {
            const parentIndex = _getParent(index);
            heap[index] = heap[parentIndex];
            index = parentIndex;
        }
        heap[index] = addedValue;
    };

    const _getParent = (index) => {
        return Math.floor((index - 1) / 2);
    };

    const _isFull = () => {
        return size === heap.length;
    };

    const _insert = (value) => {
        if (_isFull()) {
            throw "Heap is full!";
        }

        heap[size] = value;

        _fixHeapAbove(size);

        size++;
    };

    const _traverse = () => {
        let i = -1;
        while (++i < size && !console.log(`Index: ${i} Value: ${heap[i]}`));
    }

    this.isFull = _isFull;
    this.insert = _insert;
    this.traverse = _traverse;
};

const heap = new MaxHeap(15);

heap.insert(30);
heap.insert(29);
heap.insert(27);
heap.insert(26);
heap.insert(25);
heap.insert(22);
heap.insert(20);
heap.insert(15);
heap.insert(17);
heap.insert(32);

heap.traverse();
