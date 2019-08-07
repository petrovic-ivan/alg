const Node = function(d) {

    let data = d;
    let next;
  
    this.setNext = function(n) {
      next = n;
    };
  
    this.getNext = function() {
      return next;
    };
  
    this.getData = function() {
      return data;
    };
  };
  
const LinkedList = function() {
    let size = 0;
    let head = null;
  
    this.addToFront = function(n) {
      let node = new Node(n);
      node.setNext(head);
      head = node;
      size = size + 1;
    };
  
    this.removeFromFront = function() {
      if (this.isEmpty()) {
       return null;
      } 

      const removedNode = head;
      head = head.getNext();
      removedNode.setNext(null);
      return removedNode;
    };
  
    this.getHead = function() {
      return head;
    };
  
    this.isEmpty = function() {
      return !head;
    };
  
    this.printAll = function() {
      let node = this.getHead();
      let text = 'head -> ';
      while (node) {
          text += node.getData() + ' -> ';
          node = node.getNext();
      }
      console.log(text + 'end');
    }

  };
  
  const linkedList = new LinkedList();
  linkedList.addToFront(1);
  linkedList.addToFront(2);
  linkedList.addToFront(3);
  linkedList.addToFront(4);
  linkedList.addToFront(5);
  linkedList.addToFront(6);

  linkedList.printAll();
  
  