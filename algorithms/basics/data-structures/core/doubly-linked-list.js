class Node {
    constructor(value) {
      this.value = value;
      this.next = null;
      this.prev = null; 
    }
  }
  
  class DoublyLinkedList {
    constructor() {
      this.head = null;
      this.tail = null;
    }
  
    append(value) {
      const newNode = new Node(value);
  
      if (!this.head) { 
        this.head = newNode;
        this.tail = newNode;
        return;
      }
  
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
  
    toArray() {
      const result = [];
      let current = this.head;
      while (current) {
        result.push(current.value);
        current = current.next;
      }
      return result;
    }
  
    toReverseArray() {
      const result = [];
      let current = this.tail;
      while (current) {
        result.push(current.value);
        current = current.prev;
      }
      return result;
    }
  }
  
  const dll = new DoublyLinkedList();
  dll.append(10);
  dll.append(20);
  dll.append(30);
  
  console.log(dll.toArray());       // [10, 20, 30]
  console.log(dll.toReverseArray()); // [30, 20, 10]
  