function verify() {
    var date = new Date() 
    var year = date.getFullYear()
    var fyear = document.getElementById('txtyear')
    var res = document.querySelector('div#res')

    if (fyear.value.length == 0 || fyear.value > year){
        window.alert('ERROR! Check the information inserted and try again')
    }
    else {
        var fgender = document.getElementsByName('radgender')
        var age = year - Number(fyear.value)
        var gender = ''
        var img = document.createElement('img')

        img.setAttribute('id', 'photo')

        if(fgender[0].checked){
            gender = 'Male'
            
            if (age >= 0 && age < 10){
                img.setAttribute('src', './img/baby-m.png')
            }
            else if (age < 21){
                img.setAttribute('src', './img/young-m.png')
            }
            else if (age < 50){
                img.setAttribute('src', './img/adult-m.png')
            }
            else{
                img.setAttribute('src', './img/old-m.png')
            }
        }
        else if (fgender[1].checked){
            gender = 'Female'

            if (age >= 0 && age < 10){
                img.setAttribute('src', './img/baby-f.png')
            }
            else if (age < 21){
                img.setAttribute('src', './img/young-f.png')
            }
            else if (age < 50){
                img.setAttribute('src', './img/adult-f.png')
            }
            else{
                img.setAttribute('src', './img/old-f.png')
            }
        }

        res.style.textAlign = 'center'
        res.innerHTML = `We detected a ${gender} with ${age} years old.<br>`
        res.appendChild(img)
    }
}