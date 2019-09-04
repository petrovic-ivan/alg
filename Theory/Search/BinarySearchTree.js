const TreeNode = function (d) {

    let data = d;
    let leftChild;
    let rightChild;

    const getData = () => {
        return data;
    }

    const setData = (value) => {
        data = value;
    }

    const getLeftChild = () => {
        return leftChild;
    }

    const setLeftChild = (value) => {
        leftChild = value;
    }

    const getRightChild = () => {
        return rightChild;
    }

    const setRightChild = (value) => {
        rightChild = value;
    }

    const insert = (value) => {
        if (value === data) {
            return;
        }

        if (value < data) {
            if (!leftChild) {
                leftChild = new TreeNode(value);
            } else {
                leftChild.insert(value);
            }
        } else {
            if (value > data) {
                if (!rightChild) {
                    rightChild = new TreeNode(value);
                } else {
                    rightChild.insert(value);
                }
            }
        }
    }

    const traverseInOrder = () => {

        if (leftChild) {
            leftChild.traverseInOrder();
        } 

        console.log(data);

        if (rightChild) {
            rightChild.traverseInOrder();
        }
    };


    this.getData = getData;
    this.setData = setData;
    this.getLeftChild = getLeftChild;
    this.setLeftChild = setLeftChild;
    this.getRightChild = getRightChild;
    this.setRightChild = setRightChild;
    this.insert = insert;
    this.traverseInOrder = traverseInOrder;
};


const BinarySearchTree = function () {

    let root;

    const insert = (value) => {
        if (!root) {
            root = new TreeNode(value);
        } else {
            root.insert(value);
        }
    };

    
    this.insert = insert;
    this.traverseInOrder = () => {
        if (root) {
            root.traverseInOrder();
        }
        
    }
};



const tree = new BinarySearchTree();
tree.insert(25);
tree.insert(20);
tree.insert(15);
tree.insert(27);
tree.insert(30);
tree.insert(29);
tree.insert(26);
tree.insert(22);
tree.insert(32);

tree.traverseInOrder();