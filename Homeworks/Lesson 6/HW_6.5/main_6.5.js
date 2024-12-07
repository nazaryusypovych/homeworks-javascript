let str = 'Ревуть воли як ясла повні';

function  stringToarray (str){
    if (str) {
        let split = str.split(` `);
        return split;
    }
    return [` `];
}

let arr = stringToarray(str);
console.log(arr);