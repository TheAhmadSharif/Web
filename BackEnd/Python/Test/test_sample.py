def fun(x):
	return x + 1;

def test_answer():
	assert fun(1) == 2

class TestClass:
	def test_one(self):
		x = 'this'
		assert 'h' in x