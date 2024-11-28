console.log("working")
const types = ['h1', 'h2', 'h3', 'h4', 'h5', 'p', 'li', 'td', 'caption', 'a', 'span', 'b', 'i', 'div', 'a', 'strong', 'em', 'small', 'mark', 'del','ins', 'sub','sup',]
for (let i = 0; i < types.length; i++) {
    const text = document.querySelectorAll(types[i])
    /*for (let i = 0; i < text.length; i++) {
        if (text[i].slice(0,5) === "Shark") {
            text[i] = "Blahaj" + text[i].substr(5);
        }
        if (text[i].slice(0,5) === "shark") {
            text[i] = "blahaj" + text[i].substr(5);
        }
    }*/
    for (let i = 0; i < text.length; i++) {
        
        if (text[i].innerHTML.includes('shark')) {
            text[i].innerHTML = text[i].innerHTML.replace(/shark/g, "blahaj");
        }
        if (text[i].innerHTML.includes("Shark")) {
            text[i].innerHTML = text[i].innerHTML.replaceAll(/Shark/g, "Blahaj");
        }
        if (text[i].innerHTML.includes("SHARK")) {
            text[i].innerHTML = text[i].innerHTML.replaceAll(/SHARK/g, "BLAHAJ")
        }

    }
}