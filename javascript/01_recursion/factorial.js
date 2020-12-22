// Iterative
class Factorial {
  iterative(num) {
    let total = 1;
    for (let i = num; i > 1; i--) {
      total *= i;
    }
    console.log(total);
    return total;
  }

  recursive(num) {
    if (num === 1) return 1;
    return num * this.recursive(num - 1);
  }
}

const factorial = new Factorial();
factorial.iterative(5);
console.log(factorial.recursive(5));
