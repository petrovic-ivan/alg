const ArrayQueue = function () {

    let backArray = [];
    let front;
    let back;

    this.enqueue = function (item) {
        backArray.push(item);
    }

    this.dequeue = function () {
        const latest = backArray.length - 1;
        if (latest <= 0) {
            return null;
        }

        const data = backArray[latest];
        backArray.splice(latest, 1);

        return data;
    }

    this.peek = function () {
        const latest = backArray.length - 1;
        if (latest <= 0) {
            return null;
        }

        return backArray[latest];
    }

    this.getSize = function () {
        return backArray.length;
    }

    this.print = function (data) {
        if (data) {
            console.log(data);
        } else {
            backArray.map(item => console.log(item));
        }
    }
}

const arrayQueue = new ArrayQueue();
arrayQueue.enqueue(1);
arrayQueue.enqueue(2);
arrayQueue.enqueue(3);
arrayQueue.enqueue(4);

arrayQueue.print();