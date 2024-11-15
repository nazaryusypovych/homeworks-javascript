function fobar(text) {
    let li = `
<ul>
    <li> ${text} </li>
    <li> ${text} </li>
    <li> ${text} </li>
</ul>
`
    document.write(li);
}

fobar(`hello1`)
fobar(`hello2`)
