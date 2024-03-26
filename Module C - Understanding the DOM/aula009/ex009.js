function sum(){
    var txtNumber1 = window.document.getElementById('txtNumber1')
    var txtNumber2 = window.document.querySelector('input#txtNumber2')
    var result = window.document.getElementById('result')

    var number1 = Number(txtNumber1.value)
    var number2 = Number(txtNumber2.value)
    var sum = number1 + number2

    result.innerHTML = `The sum between ${number1} and ${number2} is ${sum}.`
}