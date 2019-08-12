const CircularQueue = function (max) {

    let length = max
    let data = [];
    let front = 0;
    let back = 0;

    const isFull = function () {
        return front === 0 && back === length - 1;
    }

    const canSwipe = function () {
        return front > 0 && back === length - 1;
    }

    this.enqueue = function (item) {
        if (!isFull()) {

            if (canSwipe()) {
                data = data.slice(front, back);
                back = back - front;
                front = 0;
            }

            data[back++] = item;
        } else {
            console.log('Queue is full!');
        }

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
        data.map(item => console.log(item));
        console.log(`Back: ${back}, Front: ${front}, Size ${back - front}`);
        console.log('---');
    }
}

const circularQueue = new CircularQueue(5);
circularQueue.enqueue(1);
circularQueue.enqueue(2);
circularQueue.enqueue(3);
circularQueue.enqueue(4);

circularQueue.print();

circularQueue.dequeue();
circularQueue.dequeue();
circularQueue.dequeue();

circularQueue.print();

circularQueue.enqueue(5);

circularQueue.print();