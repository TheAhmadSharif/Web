function fact(n) {
	if(n == 0) {
		return 1;
	} else {
		n = n - 1;
		return n * fact (n-1);
		
	}
}


fact(4);