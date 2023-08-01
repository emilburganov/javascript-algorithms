class LinkedList {
    constructor() {
        this.size = 0;
        this.root = null;
    }

    add(value) {
        if (this.size === 0) {
            this.root = new Node(value);
            this.size++;

            return true;
        }

        let node = this.root;

        while (node.next) {
            node = node.next;
        }

        node.next = new Node(value);

        this.size++;
    }

    print() {
        let result = [];

        let node = this.root;

        while (node) {
            result.push(node.value);
            node = node.next;
        }

        return result;
    }
}

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

const linkedList = new LinkedList();
linkedList.add(5);
linkedList.add(3);
linkedList.add(4);
linkedList.add(1);
linkedList.add(6);

console.log(linkedList.print());
console.log(linkedList.size);