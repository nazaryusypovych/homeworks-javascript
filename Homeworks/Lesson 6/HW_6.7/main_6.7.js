let nums = [11,21,3];

function  sortNums(array,direction){
    if (direction === `growth`){
        return array.sort((a, b) => a-b);
    }
    if (direction === `decline`){
        return array.sort((a,b) => b-a);
    }

}

console.log(sortNums(nums, `decline`));