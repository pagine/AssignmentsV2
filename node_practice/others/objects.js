let obj = {
    foo: "bar",
    [ "baz" + "bar" ]: 42,
    callFn(arg) {
    	console.log('fn call');
    }
}

let x=10, y=20;
let obj2 = { x, y }

console.log(obj);
obj.callFn();

console.log(obj2);
