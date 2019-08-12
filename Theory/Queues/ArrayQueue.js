const ArrayQueue = function () {

    let data = {};
    let front = 0;
    let back = 0;

    this.enqueue = function (item) {
        data[back++] = item;
    }

    this.dequeue = function () {
        if (this.size() <= 0) {
            back = 0;
            front = 0;
            return null;
        }

        const item = data[front];
        delete data[front++];
        return item;
    }

    this.peek = function () {
        if (this.size() > 0) {
            return data[front];
        }
        return null;
    }

    this.size = function () {
        return back - front;
    }

    this.print = function () {
        Object.values(data).map(item => console.log(item));
        console.log(`Size ${this.size()}.`)
        console.log('---');
    }
}

const arrayQueue = new ArrayQueue();
arrayQueue.enqueue(1);
arrayQueue.enqueue(2);
arrayQueue.enqueue(3);
arrayQueue.enqueue(4);

arrayQueue.print();

arrayQueue.dequeue();
arrayQueue.dequeue();
arrayQueue.dequeue();

arrayQueue.print();
