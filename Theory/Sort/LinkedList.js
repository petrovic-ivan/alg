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
      size++;
    };
  
    this.removeFromFront = function() {
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
  
  };
  
  const linkedList = new LinkedList();
  linkedList.addToFront(1);
  linkedList.addToFront(2);
  linkedList.addToFront(3);
  
  console.log(linkedList.getHead().getData());
  
  linkedList.removeFromFront();
  
  console.log(linkedList.getHead().getData());
  
  