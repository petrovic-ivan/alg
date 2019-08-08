const Stack = function () {
    let stack = [];
    let top = 0;

    this.push = function (data) {
        stack[top++] = data;
    }

    this.pop = function () {
        if (stack.length === 0) {
            return null;
        }
        const data = stack[stack.length - 1];
        stack.splice(stack.length - 1, 1);
        top--;
        return data;
    }

    this.peek = function () {
        if (stack.length === 0) {
            return null;
        }
        const data = stack[stack.length - 1];
        return data;
    }

    this.getSize = function () {
        return top;
    }

    this.print = function () {
        stack.map(d => console.log(d));
    }
}

const stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);

// stack.print();

stack.pop();

stack.print();



