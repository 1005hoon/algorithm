class DoublyLinkedList {
  constructor(value) {
    this.head = {
      value,
      next: null,
      prev: null
    };
    this.tail = this.head;
    this.length = 1;
  }

  append(value) {
    const newNode = {
      value,
      next: null,
      prev: null
    };
    this.tail.next = newNode;
    this.tail = newNode;
    newNode.prev = this.tail;
    this.length ++;
    return this;
  }
}

const newLink = new DoublyLinkedList(3)
newLink.append(5)
console.log(newLink)
