var uscore2 = 0
var cscore2 = 0
var play = "y"
var play2 = "y"
alert("Welcome to 'Do The Thing'")
do{
    var uscore = 0
    var cscore = 0
    do {
        var numc = Math.floor(Math.random() * 10) + 1
        cscore = cscore + numc
        alert(`The new number is ${numc}
    The new total is ${cscore}`)
    }while(cscore < 16)
    alert(`The computer has reached ${cscore} the computer will not draw anymore`)
    if(cscore > 20){
        uscore2 = uscore2 + 1
        alert(`The computer has gone over 20 with ${cscore} you will not draw`)
    }else{
        do {
            var nump = Math.floor(Math.random() * 10) + 1
            uscore = uscore + nump
            alert(`Your number is ${nump}
        Your total is ${uscore}`)
            play = prompt("Do you want to draw again? y/n")
        }while((play == "y") && (uscore < 20))
        alert(`You have reached ${uscore}`)
    }
    if(uscore > 20){
        alert(`You have gone over 20 with ${uscore} computer`)
        cscore2 = cscore2 + 1
    }else if (uscore > cscore){
        uscore2 = uscore2 + 1
    }else if (uscore < cscore){
        cscore2 = cscore2 + 1
    }else{
        alert("The scores were tied; no points given")
    }
    alert(`This round scores are
    YOU:${uscore2} COM:${cscore2}`)
    play2 = prompt("Do you want to play another game")
}while(play2 == "y")
alert(`The final scores are
    YOU:${uscore2} COM:${cscore2}`)