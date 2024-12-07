let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

// відсортувати його за спаданням за monthDuration

let sortmonthDuration = coursesAndDurationArray.sort((a, b) =>{
    return b.monthDuration - a.monthDuration
});

console.log(sortmonthDuration);

// відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців

let coursesMoreFiveMonth = coursesAndDurationArray.filter(value => value.monthDuration > 5);

console.log(coursesMoreFiveMonth);

// за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}

let mapcoursesAndDurationArray = coursesAndDurationArray.map((value, index) =>{
    return {id: index+1, title: value.title, onthDuration: value.monthDuration}
})

console.log(mapcoursesAndDurationArray);