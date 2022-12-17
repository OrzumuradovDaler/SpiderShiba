// let name = 'Alex'
// let money = 10000
// let account = 7777

// let whatsyourname = prompt('Whats your name')

// if(whatsyourname == name){
//     let usernumber = prompt("Account number")
//     if(usernumber == account){
//         let moneyBank = prompt("How much money you want?")
// if(moneyBank <= money){
    
//     console.log(`У вас на счету осталось : ${money - moneyBank} $`)
//     console.log(`Вы обналичили: ${moneyBank} $`)
// }
// else{
//     alert("You dont have so much cash!")
// }
//     }
//     else{
//         alert("Inccorect password!")
//     }
// }else{
//     alert("Invalid user!")
// }


let userName = "A".trim()
let minage = 20
let maxage = 40
let moremoney = 100


let nameb = prompt("Whats your name")
if( userName.slice(0) === nameb.slice(0)){
    let clubage = prompt("How old are you")
    if(clubage >= minage && clubage <= maxage ){
        let moneys = prompt("How much money you have?")
        if(moremoney <= moneys ){
            alert("Acces guaranted")
        }
        else{
            alert("You dont have so much money")
        }
    }
else{
    alert("Your too old")
}
}
else{
    alert("Your not invited")
}