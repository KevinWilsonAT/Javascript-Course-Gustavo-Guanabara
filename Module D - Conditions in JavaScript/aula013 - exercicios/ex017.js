function load(){   
    let msg = window.document.getElementById('msg')
    let img = window.document.getElementById('img')
    let date = new Date()
    let hour = date.getHours()
    let minute = date.getMinutes()

    if (hour >= 0 && hour < 6){
        img.src= './img/night.png'
        document.body.style.background = '#141638'

        msg.innerHTML = `Good Night. Now it's ${hour} hours and ${minute} minutes - (${hour}:${minute} AM)`
    }
    else if (hour >= 6 && hour < 12){
        img.src= './img/morning.png'
        document.body.style.background = '#F3F0E9'

        msg.innerHTML = `Good Morning. Now it's ${hour} hours and ${minute} minutes - (${hour}:${minute} AM)`
    }
    else if (hour >= 12 && hour < 18){
        img.src= './img/afternoon.png'
        document.body.style.background = '#FDC389'

        msg.innerHTML = `Good Afternoon. Now it's ${hour} hours and ${minute} minutes - (${hour}:${minute} PM)`
    }
    else {
        img.src= './img/evening.png'
        document.body.style.background = '#B886AB'

        msg.innerHTML = `Good Evening. Now it's ${hour} hours and ${minute} minutes - (${hour}:${minute} PM)`
    }
}