function* channel () {
  var name = yield 'hello, what is your name?' // [1]
  return 'well hi there ' + name
}
var gen = channel()
console.log(gen.next().value) // hello, what is your name? [2]
setTimeout(function(){console.log(gen.next('billy').value)}); // well hi there billy [3]}, 2000);


function* range (start, end, step) {
    while (start < end) {
        yield start
        start += step
    }
}

for (let i of range(0, 10, 2)) {
    console.log(i) // 0, 2, 4, 6, 8
}