function minValue(numbers) {
    let min = numbers[0];
    for (let number of numbers){
        if (number < min){
            min = number;
        }
    }
    return min;
}

console.log(minValue([8, 6, 9, 0, -179]))