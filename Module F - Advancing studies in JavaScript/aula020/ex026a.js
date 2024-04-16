/* EXAMPLE 1 */

function oddEven(num){
	if(num % 2 == 0){
		return `${num} is an Even Number`
	}
	else {
		return `${num} is an Odd Number`
	}
}

console.log(oddEven(11))

/* EXAMPLE 2 */ 

function addition(num1, num2){
	return `${num1} + ${num2} = ${num1 + num2}`
}

console.log(addition(2, 5))

/* EXAMPLE 3 */ 

mult = function(num3){
	return `${num3} * 2 = ${num3 * 2}`
}

console.log(mult(5))

/* EXAMPLE 4 - NO RECURSIVE FACTORIAL */ 

function factorialnorecursive(num4){
	let fact = 1
	
	for(let count = num4; count > 1; count--){
		fact *= count
	}

	return `${num4}! = ${fact}`
}

console.log(factorialnorecursive(5))

/* EXAMPLE 5 - RECURSIVE FACTORIAL */ 

function factorialrecursive(num5){
	if(num5 == 1){
		return 1
	}
	else {
		return num5 * factorialrecursive(num5 - 1)
	}

	
}

console.log(factorialrecursive(5))