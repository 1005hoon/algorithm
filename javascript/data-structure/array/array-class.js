class MyArray {
  constructor() {
    this.length = 0;
    this.data = {};
  }

  get(index) {
    return this.data[index];
  }

  push(item) {
    this.data[this.length] = item;
    this.length ++;
    return this.data;
  }

  pop() {
    const lastItem = this.data[this.length - 1];
    delete this.data[lastItem];
    this.length --;
    return this.data;
  }

  delete(index) {
    const item = this.data[index];
    this.shiftItems(index);
    return item;
  }

  shiftItems(index) {
    for (let i = index; i < this.length -1; i ++) {
      this.data[index] = this.data[i+1];
    }
    delete this.data[this.length-1];
    this.length --;
  }
}

const newArray = new MyArray();
newArray.push('hello');
newArray.push('there');
newArray.push('check')
newArray.pop()
console.log(newArray)
