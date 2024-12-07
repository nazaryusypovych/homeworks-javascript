let suits = ['spade', 'diamond','heart', 'clubs'];

let values = ['6', '7', '8', '9', '10','jack','queen','king', 'ace'];

let cards = [];

for (let suit of suits){
    for (let value of values){
        let card = {suit: suit, value: value}

        if (suit === 'diamond' || suit === 'heart'){
            card.color = `red`;
        } else {
            card.color = `black`;
        }

        cards.push(card);

    }

}

console.log(cards);



let reduce = cards.reduce((accum, card) => {

    switch (card.suit) {
        case `spade`:
            accum.spades.push(card);
            break;
    }
    switch (card.suit) {
        case `diamond`:
            accum.diamonds.push(card);
            break;
    }
    switch (card.suit) {
        case `heart`:
            accum.hearts.push(card);
            break;
    }
    switch (card.suit) {
        case `clubs`:
            accum.clubs.push(card);
            break;
    }
    return accum;

},{
    spades:[],
    diamonds:[],
    hearts:[],
    clubs:[]
})

console.log(reduce);