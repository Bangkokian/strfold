	// "folds" a string so that 12345 --> 15243  and  123456 --> 162534

	function strFold(given) {
		x=1;
		newstr = '';
		odd = false;
		if ((given.length%2) == 1) odd = true;

		while (x<Math.floor(given.length/2)+2) {
			newstr += given.substr(x-1,1);
			newstr += given.substr((x*-1)-0,1);
			x++;
		}
		if (odd) {
			newstr = newstr.substr(0,newstr.length-1);
		} else {
			newstr = newstr.substr(0,newstr.length-2);
		}
		return newstr;
	}	

