/*
	Binary Search 
	Time Complexity O(logn) 
*/

const _array = [1, 2, 4, 6, 8, 10, 16];

const target = 6;
const start = 0;
const end = _array.length;

console.time();
function findMe(target, start, end) {
	const middle = Math.floor((start + end)/2);

	if(_array[middle] == target) {
		return middle;
	}

	if(_array[middle] > target) {
		return findMe(target, start, middle - 1)
	} else {
		return findMe(target, middle + 1, end)
	}
}

var d = findMe(target, start, end);
console.log(d);
console.timeEnd();

