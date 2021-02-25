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
      prev: this.head
    };
    this.head.next = newNode;
    this.tail = newNode;
    this.length ++;
  }
}

const newLink = new DoublyLinkedList(3)
newLink.append(10)
console.log(newLink)
