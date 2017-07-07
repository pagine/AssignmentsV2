function fn(a=2, b, c=3, ...rest) {
	console.log(a,b,c, rest);
}

fn(1, 1, 1,2,3,4,5);
