let n = 31052022;
// Write solution code here to find the lucky number


        let remainder;
		let sum = 0;
		
		while (n!=0){

		    remainder = n % 10;
		    sum = sum + remainder;
		    n = parseInt(n/10);
		    
		}

        // Again finding sum of Digit 

        let n2 = sum;
        sum = 0;             // reset values
        remainder = 0;         // reset values

        while(n2!=0){

            remainder = n2 % 10;
            sum = sum + remainder;
            n2 = parseInt(n2/10);

    }



console.log(`Your Lucky Number is ${sum}`);
