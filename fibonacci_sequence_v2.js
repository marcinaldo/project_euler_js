var limit = 4000000;

var sum = 0;
var a = 1;
var b = 1;

while (b < limit) {
    if (b % 2 === 0) {
        sum += b;
    }
    var h = a + b;
    a = b;
    b = h;
}

console.log(sum);