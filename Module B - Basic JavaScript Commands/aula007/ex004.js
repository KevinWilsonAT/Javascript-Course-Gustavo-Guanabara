//   Aritmethic Operators

//   +     Addition
//   -     Subtraction
//   *     Multiplication
//   /     Division

//   %     Modulo
//   **    Potentiation

//   Precedence order

//   1st.  ()
//   2nd.  **
//   3rd.  *  /  %
//   4th.  +  -

var a = 5 + 3               // 8
var b = a % 5               // 3
var c = 5 * b ** 2          // 45
var d = 10 - a / 2          // 6
var e = 6 * 2 / d           // 2
var f = b % e + 4 / e       // 

alert(`var a = 5 + 3          ->   var a = ${a}`)
alert(`var b = a % 5          ->   var b = ${a} % 5        -> var b = ${b}`)
alert(`var c = 5 * b ** 2     ->   var c = 5 * ${b} ** 2   -> var c = ${c}`)
alert(`var d = 10 - a / 2     ->   var d = 10 - ${a} / 2   -> var d = ${d}`)
alert(`var e = 6 * 2 / d      ->   var e = 6 * 2 / ${d}    -> var e = ${e}`)
alert(`var f = b % e + 4 / e  ->   var f = ${b} % ${e} + 4 / ${e} -> var f = ${f}`)

// Self Attribution

//   var n = 3

//   n = n + 4      n += 4
//   n = n - 4      n -= 4
//   n = n * 4      n *= 4
//   n = n / 4      n /= 4
//   n = n ** 4     n **= 4
//   n = n % 4      n %= 4

// Increment / Decrement

//   var n = 5

//   n = n + 1      n += 1     n++
//   n = n - 1      n -= 1     n--