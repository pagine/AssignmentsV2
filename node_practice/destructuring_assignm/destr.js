var list = [ 1, 2, 3 ]
var [ a, ,b ] = list;
[ b, a ] = [ a, b ];

console.log(b);

//--------------------------
var getObjects = () => {
return {op:"first", lhs:{val:"val", val2:"val2"}, rhs:"third"};
};

var { op: a, lhs:{val2:v}, rhs: c } = getObjects();

console.log("a="+a);
console.log("v="+v);
console.log("c="+c);

//--------------------------
var obj = { a: 1 };
var list = [ 1 ];
var { a, b = 2 } = obj;
var [ x, y = 2 ] = list;

console.log(x, y, a, b);



//--------------------------
function f ([ name, val ]) {
    console.log(name, val)
}
function g ({ name: n, val: v }) {
    console.log(n, v)
}
function h ({ name, val }) {
    console.log(name, val)
}
f([ "bar", 42 ])
g({ name: "foo", val:  7 })
h({ name: "bar", val: 42 })
