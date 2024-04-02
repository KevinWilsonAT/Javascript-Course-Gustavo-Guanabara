function generate() {
    let fmultnum = document.getElementById('txtmultnum')
    let fmult_sh = document.getElementById('mult_sheet')

    if (fmultnum.value.length == 0){
        window.alert('Please, Insert a valid number')
    }
    else {
        let number = Number(fmultnum.value)
        let counter = 1
        fmult_sh.innerHTML = ''

        for(counter = 1; counter <= 10; counter++) {
            let sel_item = document.createElement('option')
            sel_item.text = `${number} x ${counter} = ${number * counter}`
            sel_item.value = `fmult_sh${counter}`
            fmult_sh.appendChild(sel_item)
        }
    }
}