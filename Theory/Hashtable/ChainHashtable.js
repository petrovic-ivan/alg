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

const LinkedList = function () {
    let size = 0;
    let head = null;
    let tail = null;

    this.addToFront = function (n) {
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

    this.addBefore = function(d, before) {

        const previous = before.getPrevious();
        if (size <= 0 || !previous) {
            this.addToFront(d);
            return;
        }

        const node = new Node(d);
        node.setNext(before);
        previous.setNext(node);
        before.setPrevious(node);
    }

    this.addToEnd = function (n) {
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


    this.first = (predicate) => {
        let node = this.getHead();
        while (node) {
            const nodeData = node.getData();
            if (node && predicate(nodeData)) return nodeData;
            node = node.getNext();
        }
        return null;
    }

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

const ChainHashtable = function (max) {

    const hashtable = new Array(max);

    const hashCode = function (key) {
        return key.length % hashtable.length;
    }

    this.put = function (key, value) {
        let hashedKey = hashCode(key);
        if (!hashtable[hashedKey]) {
            hashtable[hashedKey] = new LinkedList();
        } 

        hashtable[hashedKey].addToFront({key, value});
    }

    this.get = function (key) {
        let hashedKey = hashCode(key);
        
        let data = null;
        let list = hashtable[hashedKey];
        if (list) {
            data = list.first(n => n.key === key)
        } 
        return data;
    }

    this.remove = function (key) {
        let hashedKey = hashCode(key);
        
        
        return false;
    }
}

const hashtable = new ChainHashtable(5);
hashtable.put('Mike', 'Mike Object');
hashtable.put('John', 'John Object');
hashtable.put('Jen', 'Jane Object');

const a = hashtable.get('John');
