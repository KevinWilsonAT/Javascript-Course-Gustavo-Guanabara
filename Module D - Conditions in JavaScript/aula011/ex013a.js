var age = window.prompt("Age: ")

if(age < 18){
    window.alert("Can't Vote")
}
else{
    if(age >= 16 && age < 18){
        window.alert("Can Vote Optionally")
    }
    else{
        window.alert("Can Vote Obligatory")
    }
}