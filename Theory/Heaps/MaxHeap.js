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

    const _fixHeapBelow = (index, lastHeapIndex) => {
        let childToSwap;
        while (index <= lastHeapIndex) {
            const leftChild = _getChild(index, true);
            const rightChild = _getChild(index, false);

            if (leftChild <= lastHeapIndex) {
                if (rightChild > lastHeapIndex) {
                    childToSwap = leftChild;
                } else {
                    childToSwap = (heap[leftChild] > heap[rightChild] ? leftChild : rightChild);
                }

                if (heap[index] < heap[childToSwap]) {
                    const tmp = heap[index];
                    head[index] = heap[childToSwap];
                    heap[childToSwap] = tmp;
                } else {
                    break;
                }

                index = childToSwap;
            } else {
                break;
            }
        }
    }

    const _getParent = (index) => {
        return Math.floor((index - 1) / 2);
    };

    const _getChild = (index, left) => {
        return 2 * index + (left ? 1 : 2)
    }

    const _isFull = () => {
        return size === heap.length;
    };

    const _isEmpty = () => {
        return size === 0;
    };

    const _insert = (value) => {
        if (_isFull()) {
            throw "Heap is full!";
        }

        heap[size] = value;

        _fixHeapAbove(size);

        size++;
    };

    const _delete = (index) => {
        if (_isEmpty()) {
            throw "Heap is empty!";
        }

        const parent = _getParent(index);
        const deletedValue = heap[index];

        heap[index] = heap[size - 1];

        if (index === 0 || heap[index] < heap[parent]) {
            _fixHeapBelow(index, size - 1);
        } else {
            _fixHeapAbove(index, size - 1);
        }

        size--;

        return deletedValue;
    };

    const _traverse = () => {
        let i = -1;
        while (++i < size && !console.log(`Index: ${i} Value: ${heap[i]}`));
    }

    this.isFull = _isFull;
    this.isEmpty = _isEmpty;
    this.insert = _insert;
    this.delete = _delete;
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

heap.delete(0);

heap.traverse();
