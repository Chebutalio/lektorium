let a = [3,0,-5,1,44,-12,3,0,0,1,2,-3,-3,2,1,4,-2-3-1];
		let b = [-1,-8,-2];
		let c = [1,7,3];
		let d = [1,undefined,3,5,-3];
		let e = [1,NaN,3,5,-3];
		let f = [212, 1, 43, 53, 112, 124, 2142];

function maxMinSum(array) {
	let max = -1000;
	let min = 1000;
	let sum = 0;
	for (let i = 0; i < array.length; i++) {
		if (array[i] !== NaN && array[i] !== undefined) {
			sum += array[i];
			if (array[i] > max) {
				max = array[i];
			}
			if (array[i] < min) {
				min = array[i];
			}
		} 
	}
	console.log("max = " + max);
	console.log("min = " + min);
	console.log("sum = " + sum);
}
maxMinSum(a);
maxMinSum(b);
maxMinSum(c);
maxMinSum(d);
maxMinSum(e);
maxMinSum(f);