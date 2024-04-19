let num = document.querySelector('input#fnum')
let list = document.querySelector('select#flist')
let res = document.querySelector('div#res')
let values = []

function isNumber(n){
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    }
    else {
        return false
    }
}

function inList(n, l){
    if(l.indexOf(Number(n)) != -1){
        return true
    }
    else {
        return false
    }
}

function add() {
    if(isNumber(num.value) && !inList(num.value, values)){
        values.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `The Value ${num.value} has been added`
        list.appendChild(item)
        res.innerHTML = ''
    }
    else {
        window.alert('Invalid Value or Already registered')
    }

    num.value = ''
    num.focus()
}

function finish(){
    if (values.length == 0){
        window.alert('Register a number before finishing the operation')
    }
    else {
        let total = values. length
        let greater = values[0]
        let lesser = values[0]
        let sum = 0
        let avg = 0

        for(let pos in values){
            sum += values[pos]
            if(values[pos] > greater){
                greater = values[pos]
            }
            if(values[pos] < lesser){
                lesser = values[pos]
            }
        }
        avg = sum / total

        res.innerHTML = ''
        res.innerHTML += `<p>In total, there is ${total} numbers registered.</p>`
        res.innerHTML += `<p>The greater number registered is ${greater}.</p>`
        res.innerHTML += `<p>The lesser number registered is ${lesser}.</p>`
        res.innerHTML += `<p>The sum of all registered numbers is ${sum}.</p>`
        res.innerHTML += `<p>The average of all registered numbers is ${avg}.</p>`
    }
}