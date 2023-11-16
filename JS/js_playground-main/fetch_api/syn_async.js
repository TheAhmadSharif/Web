console.log('1 Sync');
setTimeout(() => {
	console.log('2 Async')
}, 1000);

console.log('3 Sync');


console.log('_________');



fetch('/').then(() => {
	console.log('Fetch')
})