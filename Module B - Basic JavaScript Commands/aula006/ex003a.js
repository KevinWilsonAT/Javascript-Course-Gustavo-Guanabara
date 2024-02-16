let number1 = Number.parseInt(window.prompt("Insert the first number:")); // asks you to insert a number and stores in the variable number1
let number2 = Number.parseInt(window.prompt("Insert the second number:")); // asks you to insert another number and stores in the variable number2
let name = window.prompt("What is your name?");

let sum = number1 + number2;

// without placeholders

alert("No placeholders: The first number inserted is: " + number1); // show a prompt with the first number you inserted, which is stored in the variable number1
alert("No placeholders: The second number inserted is: " + number2); // show a prompt with the second number you inserted, which is stored in the variable number2
alert("No placeholders: The addition between the first number ("+number1+") and the second number ("+number2+") is: " + sum); // show a prompt with the addition between the two number you inserted, which is stored in the variable sum

// with placeholders

alert(`Using placeholders: The first number inserted is: ${number1}`); // show a prompt with the first number you inserted, which is stored in the variable number1
alert(`Using placeholders: The second number inserted is: ${number2}`); // show a prompt with the second number you inserted, which is stored in the variable number2
alert(`Using placeholders: The addition between the first number (${number1}) and the second number (${number2}) is: ${sum}`); // show a prompt with the addition between the two number you inserted, which is stored in the variable sum

// formatting strings

alert(`The string ${name} has ${name.length} letters`); // show a prompt with the number of characters in the variable name
alert(`The string ${name} in uppercase is ${name.toUpperCase()}`); // show a prompt with the name in uppercase
alert(`The string ${name} in lowercase is ${name.toLowerCase()}`); // show a prompt with the name in lowercase

// formatting numbers

alert(`Using placeholders: The first number inserted is: ${number1.toFixed(2)}, using 2 decimal numbers`); // show a prompt with the first number you inserted, with two decimal numbers

alert(`Using placeholders: The first number inserted is: ${number1.toFixed(2).replace('.', ',')}, using 2 decimal numbers and replacing the (.) to (,)`); // show a prompt with the first number you inserted, with two decimal numbers and replacing (.) to (,)

alert(`Using placeholders: The first number inserted is (if was money): ${number1.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}`); // show a prompt with the first number you inserted, with two decimal numbers and replacing (.) to (,)