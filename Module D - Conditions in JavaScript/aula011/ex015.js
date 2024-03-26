var today = new Date()
var weekday = today.getDay()

switch(weekday){
    case 0:
        window.alert("Sunday")
    break

    case 1:
        window.alert("Monday")
    break

    case 2:
        window.alert("Tuesday")
    break

    case 3:
        window.alert("Wednesday")
    break

    case 4:
        window.alert("Thursday")
    break

    case 5:
        window.alert("Friday")
    break

    case 6:
        window.alert("Saturday")
    break
}