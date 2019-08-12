const LinearQueue = function () {

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

const linearQueue = new LinearQueue();
linearQueue.enqueue(1);
linearQueue.enqueue(2);
linearQueue.enqueue(3);
linearQueue.enqueue(4);

linearQueue.print();

linearQueue.dequeue();
linearQueue.dequeue();
linearQueue.dequeue();

linearQueue.print();
