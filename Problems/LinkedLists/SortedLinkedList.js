const Node = function (d) {

    let data = d;
    let next;
    let previous;

    this.setPrevious = function (n) {
        previous = n;
    };

    this.setNext = function (n) {
        next = n;
    };

    this.getNext = function () {
        return next;
    };

    this.getPrevious = function () {
        return previous;
    }

    this.getData = function () {
        return data;
    };
};

const IntegerLinkedList = function () {
    let size = 0;
    let head = null;
    let tail = null;

    const addToFront = function (n) {
        let node = new Node(n);

        if (head) {
            head.setPrevious(node);
            node.setNext(head);
        } else {
            tail = node;
        }

        head = node;
        size++;
    };

    
    const addToEnd = function (n) {
        let node = new Node(n);

        if (tail) {
            tail.setNext(node);
            node.setPrevious(tail);
        } else {
            head = node;
        }

        tail = node;
        size++;
    }

    const addBefore = function(d, before) {

        const previous = before.getPrevious();
        if (size <= 0 || !previous) {
            addToFront(d);
            return;
        }

        const node = new Node(d);
        node.setNext(before);
        previous.setNext(node);
        before.setPrevious(node);
    }

    this.add = function(n) {
        if (size === 0) {
            addToFront(n);
            return;
        }

        let node = head;

        while(node) {
            if (n < node.getData()) {
                addBefore(n, node);
                return;
            }         
            node = node.getNext();    
        }
        if (!node) {
            addToEnd(n);    
        }
    }

    this.removeFromFront = function () {
        if (this.isEmpty()) {
            return null;
        }

        if (!head.getNext()) {
            tail = null;
        } else {
            head.getNext().setPrevious(null);
        }

        const removedNode = head;
        head = head.getNext();
        removedNode.setNext(null);
        size--;
        return removedNode;
    };

    this.removeFromEnd = function () {
        if (this.isEmpty()) {
            return null;
        }

        if (!tail.getPrevious()) {
            head = null;
        } else {
            tail.getPrevious().setNext(null);
        }

        const removedNode = tail;
        tail = tail.getPrevious();
        removedNode.setNext(null);
        size--;
        return removedNode;
    };

    this.removeAt = function (n) {
        const latestIndex = size - 1;

        if (n > latestIndex && n < 0) {
            return null;
        }

        if (n === 0 || size <= 1) {
            return this.removeFromFront();
        }

        if (n === latestIndex) {
            return this.removeFromEnd();
        }

        let node = head;
        let index = 0;
        while (node) {
            if (index === n) {
                const next = node.getNext();
                const previous = node.getPrevious();

                next.setPrevious(previous);
                previous.setNext(next);
                node.setNext(null);
                node.setPrevious(null);
                return node;
            }

            index++;
            node = node.getNext();
        }

        return null;
    }

    this.getAt = function (n) {
        const latestIndex = size - 1;

        if (n > latestIndex && n < 0) {
            return null;
        }

        if (n === 0 || size <= 1) {
            return this.getHead();
        }

        if (n === latestIndex) {
            return this.getTail();
        }

        let node = head;
        let index = 0;
        while (node) {
            if (index === n) {
                return node;
            }

            index++;
            node = node.getNext();
        }

        return null;
    }

    this.getHead = function () {
        return head;
    };

    this.getTail = function () {
        return tail;
    };


    this.isEmpty = function () {
        return !head;
    };

    this.printAll = function () {
        let list = 'head -> '
        let node = this.getHead();
        while (node) {
            list = list + node.getData() + ' -> ';
            node = node.getNext();
        }
        list = list + ' tail';
        console.log(list);
    }

    this.getSize = function () {
        console.log('Size: ', size);
        return size;
    }

};

const linkedList = new IntegerLinkedList();
linkedList.add(2);
linkedList.add(5);
linkedList.add(3);
linkedList.add(1);
linkedList.add(6);
linkedList.add(4);

linkedList.printAll();

const at = linkedList.getAt(1);

linkedList.printAll();
