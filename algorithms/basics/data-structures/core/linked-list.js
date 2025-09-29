// Node class represents a single element in the linked list
class Node {
    constructor(value) {
      this.value = value;   // The data stored in the node
      this.next = null;     // Pointer (reference) to the next node
    }
  }
  
  // LinkedList class manages the entire list
  class LinkedList {
    constructor() {
      this.head = null; // First node in the list (initially empty)
    }
  
    // Append a new value at the end of the list
    append(value) {
      const newNode = new Node(value);
  
      // If the list is empty, the new node becomes the head
      if (!this.head) {
        this.head = newNode;
        return;
      }
  
      // Otherwise, traverse until the last node
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
  
      // Attach the new node at the end
      current.next = newNode;
    }
  
    // Convert the linked list into a regular array (for easy visualization)
    toArray() {
      const result = [];
      let current = this.head;
  
      // Traverse the entire list
      while (current) {
        result.push(current.value); // Collect the value
        current = current.next;     // Move to the next node
      }
  
      return result;
    }
  }
  
  // 🔹 Example usage:
  const list = new LinkedList();
  list.append(10);
  list.append(20);
  list.append(30);
  
  console.log(list.toArray()); // [10, 20, 30]
  