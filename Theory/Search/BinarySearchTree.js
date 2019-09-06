const TreeNode = function (d) {

    let data = d;
    let leftChild;
    let rightChild;

    const _getData = () => {
        return data;
    }

    const _setData = (value) => {
        data = value;
    }

    const _getLeftChild = () => {
        return leftChild;
    }

    const _setLeftChild = (value) => {
        leftChild = value;
    }

    const _getRightChild = () => {
        return rightChild;
    }

    const _setRightChild = (value) => {
        rightChild = value;
    }

    const _insert = (value) => {
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

    const _traverseInOrder = () => {

        if (leftChild) {
            leftChild.traverseInOrder();
        }

        console.log(data); // Visiting node between left and right.

        if (rightChild) {
            rightChild.traverseInOrder();
        }
    };

    const _traversePreOrder = () => {

        console.log(data); // Visiting node before left and right.

        if (leftChild) {
            leftChild.traversePreOrder();
        }

        if (rightChild) {
            rightChild.traversePreOrder();
        }
    };

    const _get = (value) => {
        if (data === value) {
            return this;
        }

        if (value < data && leftChild) {
            return leftChild.get(value);
        }

        if (value > data && rightChild) {
            return rightChild.get(value);
        }

    }

    const _min = () => {
        if (!leftChild) {
            return this;
        }
        return leftChild.min();
    }

    const _max = () => {
        if (!rightChild) {
            return this;
        }
        return rightChild.max();
    }

    const _delete = (value) => {

    }

    this.getData = _getData;
    this.setData = _setData;
    this.getLeftChild = _getLeftChild;
    this.setLeftChild = _setLeftChild;
    this.getRightChild = _getRightChild;
    this.setRightChild = _setRightChild;
    this.insert = _insert;
    this.traverseInOrder = _traverseInOrder;
    this.traversePreOrder = _traversePreOrder;
    this.get = _get;
    this.min = _min;
    this.max = _max;
    this.delete = _delete;
};

const BinarySearchTree = function () {

    let root;

    const _insert = (value) => {
        if (!root) {
            root = new TreeNode(value);
        } else {
            root.insert(value);
        }
    };

    const _traverseInOrder = () => {
        console.log('Traverse in-order: ');
        if (root) {
            root.traverseInOrder();
        }

    }

    const _traversePreOrder = () => {
        console.log('Traverse pre-order: ');
        if (root) {
            root.traversePreOrder();
        }

    }

    const _get = (value) => {
        if (root) {
            return root.get(value);
        }
        return null;
    }

    const _min = () => {
        if (root) {
            return root.min();
        }
        return null;
    }

    const _max = () => {
        if (root) {
            return root.max();
        }
        return null;
    }

    const _delete = (value) => {
        console.log('Delete: ', value);
        root = _deleteNode(root, value);
    }

    const _deleteNode = (subTreeRoot, value) => {
        if (!subTreeRoot) {
            return null;
        }

        if (value < subTreeRoot.getData()) {
            subTreeRoot.setLeftChild(_deleteNode(subTreeRoot.getLeftChild(), value));
        } else if (value > subTreeRoot.getData()) {
            subTreeRoot.setRightChild(_deleteNode(subTreeRoot.getRightChild(), value));
        } else {
            if (!subTreeRoot.getLeftChild()) {
                return subTreeRoot.getRightChild();
            } else if (!subTreeRoot.getRightChild()) { 
                return subTreeRoot.getLeftChild();
            }

            const minRight = subTreeRoot.getRightChild().min().getData();
            subTreeRoot.setData(minRight); // Replacing value in node which we want to delete. It is not delete, only replaced value.
            subTreeRoot.setRightChild(_deleteNode(subTreeRoot.getRightChild(), minRight));
        }
        return subTreeRoot;
    }

    this.insert = _insert;
    this.traverseInOrder = _traverseInOrder;
    this.traversePreOrder = _traversePreOrder;
    this.get = _get;
    this.min = _min;
    this.max = _max;
    this.delete = _delete;
};

const tree = new BinarySearchTree();
tree.insert(25);
tree.insert(20);
tree.insert(15);
tree.insert(17);
tree.insert(22);
tree.insert(27);
tree.insert(26);
tree.insert(30);
tree.insert(29);
tree.insert(32);

tree.traversePreOrder();

console.log('Min: ', tree.min().getData());
console.log('Max: ', tree.max().getData());

tree.delete(25);

tree.traverseInOrder();