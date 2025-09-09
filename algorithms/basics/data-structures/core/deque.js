class Deque {
    constructor() {
      this.items = [];
    }
  
    pushBack(element) {
      this.items.push(element);
    }
  
    popBack() {
      return this.items.pop();
    }
  
    pushFront(element) {
      this.items.unshift(element);
    }
  
    popFront() {
      return this.items.shift();
    }
  
    isEmpty() {
      return this.items.length === 0;
    }
  }
  
  const dq = new Deque();
  dq.pushBack(1);  // [1]
  dq.pushBack(2);  // [1,2]
  dq.pushFront(0); // [0,1,2]
  
  console.log(dq.popBack());  // 2
  console.log(dq.popFront()); // 0
  