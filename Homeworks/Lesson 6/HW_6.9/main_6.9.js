let suits = ['spade', 'diamond','heart', 'clubs'];

let values = ['6', '7', '8', '9', '10','jack','queen','king', 'ace'];

let cards = [];

for (suit of suits){
    for (value of values){
        let card = {cardSuit: suit, value: value};
        if (suit === `heart` || suit === `diamond`){
            card.color = `red`;
        }else {
            card.color = `black`;
        }
        cards.push(card);
    }
}

console.log(cards);

// знайти піковий туз

console.log(cards.find(value => value.cardSuit === `spade`, value.value === `ace`));

// всі шістки

console.log(cards.filter(value => value.value === `6`));

// всі червоні карти

console.log(cards.filter(value => value.color === `red`));

// всі буби

console.log(cards.filter(value => value.cardSuit === `diamond`));

// всі трефи від 9 та більше

console.log(cards.filter(value => value.cardSuit === `spade` && (value.value !== `6` || value.value !== `7` || value.value !== `8`)));