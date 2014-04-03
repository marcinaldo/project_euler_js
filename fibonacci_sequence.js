var fibonacci = [1, 2];

var i = fibonacci[fibonacci.length - 1];
var counter = 0;

while (fibonacci[fibonacci.length -1] < 4000000) {
    i += fibonacci[fibonacci.length - 2];
    fibonacci.push(i);
    if (i % 2 === 0) {
        counter += i;
    }
}

console.log(fibonacci);
console.log(counter);