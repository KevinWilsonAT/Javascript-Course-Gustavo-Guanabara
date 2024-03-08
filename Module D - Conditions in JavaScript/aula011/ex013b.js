var now = new Date()
var hour = now.getHours()

if(hour < 12){
    window.alert(`Good Morning. It's ${hour} AM`)
}
else{
    if(hour <= 18){
        window.alert(`Good Afternoon. It's ${hour} PM`)
    }
    else{
        if(hour < 20){
            window.alert(`Good Evening. It's ${hour} PM`)
        }
        else{   
            window.alert(`Good Night. It's ${hour}PM`)
        }
    }
}