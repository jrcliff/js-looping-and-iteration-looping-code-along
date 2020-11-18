// Code your solutions in this file
const names = ['Ada', 'Brendan', 'Ali']
let eventName = 'birthday'
function writeCards(names, eventName){
    let cards = []
    for (let i = 0; i < names.length; i++){

        cards.push(`Thank you, ${names[i]}, for the wonderful ${eventName} gift!`)
    }
    return cards
}

function countDown(num){
    for (let i = num; i >= 0; i--){
        console.log(i);
    }
}