function sum(numbers) {
    let basket = 0;
    for (let number of numbers){
        basket = basket + number;
    }
    return basket;
}

console.log(sum([1,2,10]))