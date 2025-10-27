export class LinkedList {
    headNode = null;
    append(value) {
        const node = new Node(value);
        if (!this.headNode) this.headNode = node;
        else {
            let current = this.headNode;
            while (current.nextNode) current = current.nextNode;
            current.nextNode = node;
        }
    }
    prepend(value) {
        const node = new Node(value);
        if (this.headNode) node.nextNode = this.headNode;
        this.headNode = node;
    }
    size() {
        let num = 0;
        let current = this.headNode;
        while (current) {
            current = current.nextNode;
            num++;
        }
        return num;
    }
    head() {
        return this.headNode;
    }
    tail() {
        let current = this.headNode;
        while (current) {
            if (current.nextNode === null) return current;
            current = current.nextNode;
        }
    }
    at(index) {
        if (index < 0 || index > this.size()) return null;
        let current = this.headNode;
        for (let i = 0; i < index; i++) {
            current = current.nextNode;
        }
        return current;
    }
    pop() {
        let current = this.headNode;
        for (let i = 1; i < this.size() - 1; i++) {
            current = current.nextNode;
        }
        let popped = current.nextNode.value;
        current.nextNode = null;
        return popped;
    }
    contains(value) {
        let current = this.headNode;
        while (current) {
            if (current.value === value) return true;
            current = current.nextNode;
        }
        return false;
    }
    find(value) {
        let current = this.headNode;
        for (let i = 0; i < this.size(); i++) {
            if (current.value === value) return i;
            current = current.nextNode;
        }
        return null;
    }
    toString() {
        let current = this.headNode;
        let string = '';
        while (current) {
            string += `(${current.value}) -> `;
            current = current.nextNode;
        }
        string += 'null';
        return string;
    }
    insertAt(value, index) {
        if (index < 0 || index > this.size()) return null;
        const node = new Node(value);
        let current = this.headNode;
        let previous;
        if (index === 0) this.headNode = node;
        else {
            for (let i = 0; i < index; i++) {
                previous = current;
                current = current.nextNode;
            }
            previous.nextNode = node;
        }
        node.nextNode = current;
        return node;
    }
    removeAt(index) {
        if (index < 0 || index >= this.size()) return null;
        let current = this.headNode;
        let previous;
        for (let i = 0; i < index; i++) {
            previous = current;
            current = current.nextNode;
        }
        if (previous) {
            previous.nextNode = current.nextNode;
            current.nextNode = null;
        } else this.headNode = current.nextNode;
        return current;
    }
}

class Node {
    constructor(value = null, nextNode = null) {
        this.value = value;
        this.nextNode = nextNode;
    }
}