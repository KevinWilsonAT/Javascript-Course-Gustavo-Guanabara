function count() {
    let fstart = document.getElementById('txtstart')
    let fend = document.getElementById('txtend')
    let fstep = document.getElementById('txtstep')
    let res = document.querySelector('div#res')
    
    res.style.textAlign = 'center'

    if(fstart.value.length == 0 || fend.value.length == 0 || fstep.value.length == 0) {
        window.alert('ERROR! Please complete the Fields correctly')
        res.innerHTML = 'Impossible to count!'
    }
    else {
        res.innerHTML = 'Counting:<br>'
        let stt = Number(fstart.value)
        let end = Number(fend.value)
        let stp = Number(fstep.value)

        if(stp <= 0) {
            res.innerHTML = 'Impossible to count!'
        } 
        
        if(stt < end) {
            for(let count = stt; count <= end; count += stp){
                res.innerHTML += `${count} `
            }
        }
        else {
            for(let count = stt; count >= end; count -= stp){
                res.innerHTML += `${count} `
            }
        }
    }
}