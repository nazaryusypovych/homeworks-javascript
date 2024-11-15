function foobar (arrayofPrimitive) {

    document.write(`<ul>`);

    for ( let item of arrayofPrimitive){
        document.write(`<li> ${item} </li>`);
    }

    document.write(`</ul>`);
}


foobar([11, 12, `hello`, true])