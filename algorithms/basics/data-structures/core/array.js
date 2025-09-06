class MyArray {
    constructor() {
        this.data = {};
        this.length = 0;
    }

    push(item) {
        this.data[this.length] = item;
        this.length++;
        return this.length;
    }

    pop() {
        if (this.length === 0) return undefined;
        const lastItem = this.data[this.length - 1];
        delete this.data[this.length - 1];
        this.length--;
        return lastItem;
    }

    get(index) {
        return this.data[index];
    }

    delete(index) {
        const item = this.data[index];
        this._shiftItems(index);
        return item;
    }

    _shiftItems(index) {
        for (let i = index; i < this.length - 1; i++) {
            this.data[i] = this.data[i + 1];
        }
        delete this.data[this.length - 1];
        this.length--;
    }
}

const arr = new MyArray();
arr.push("Hello");
arr.push("World");
console.log(arr.get(1)); // World
arr.delete(0);
console.log(arr.get(0)); // World

// node array.js