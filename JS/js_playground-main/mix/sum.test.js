const sum = require('./sum');

test('Add 1 + 1 to equal to 2', () => {
	expect(1+1).toBe(2);
	expect(sum(1,2)).toBe(3);
	expect(2 + 2).toBe(4);
});

test('Object Assignment', () => {
  const data = {"one": 1 }
  		data["two"] = 2
  expect(data).toEqual({one: 1, two: 2});
});