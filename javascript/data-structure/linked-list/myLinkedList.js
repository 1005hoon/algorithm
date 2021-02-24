// class LinkedList {
//   constructor(value) {
//     this.head = {
//       value: value,
//       next: null
//     };    
//     this.tail = this.head;
//     this.length = 1;
//   };

//   append(value) {
//     const newNode = {
//       value,
//       next: null
//     };
//     this.tail.next = newNode;
//     this.tail = newNode;
//     this.length ++;
//     return this
//   }
  
//   prepend(value) {
//     const newNode = {
//       value,
//       next: this.head
//     };
//     this.head = newNode;
//     this.length++;
//     return this;
//   }
// }

class LinkedList {
  constructor(value) {
    this.head = {
      value,
      next: null
    };
    this.tail = this.head;
    this.length = 1;
  }

  append(value) {
    const newNode = {
      value,
      next: null
    };
    this.tail.next = newNode;
    this.tail = newNode;
    this.length ++;
    return this;
  }

  prepend(value) {
    const newNode = {
      value,
      next: this.head
    };
    this.head = newNode;
    this.length ++;
    return this;
  }

  printList() {
    const array = [];
    let currentNode = this.head;
    while(currentNode !== null) {
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return array
  }

  insert(index, value) {
    if(index > this.length) {
      return this.append(value)
    }

    const newNode = {
      value,
      next: null
    }

    const leader = this.traverseToIndex(index - 1);
    
    const holdingPointer = leader.next;
    newNode.next = holdingPointer;
    leader.next = newNode;
    this.length ++;
    return this.printList()
  }

  traverseToIndex(index) {
    let counter = 0;
    let currentNode = this.head;
    while (counter !== index) {
      currentNode = currentNode.next;
      counter ++;
    }
    return currentNode;
  }
}

const myLinkedList = new LinkedList(10);
// myLinkedList.append(15)
myLinkedList.append(20)
myLinkedList.append(14)
myLinkedList.append(22)
myLinkedList.append(64)
// console.log(myLinkedList.insert(1, 44))
console.log(myLinkedList.insert(4, 44))

// myLinkedList.prepend(15)

