console.log("working")
const types = ['html'];
let count = 0;
const nodeList = document.querySelectorAll('*');
let array = []
nodeList.forEach(function (currentValue, currentIndex, listObj) {
    if (isVisible(currentValue)) {
        array.push(currentValue);
    }
});
const text = array;
for (let i = 0; i < text.length; i++) {
    let chars = text[i].innerHTML.length;
    text[i].innerHTML = text[i].innerHTML.replace(/Sharks/g, "Blåhajar");
    text[i].innerHTML = text[i].innerHTML.replace(/sharks/g, "blåhajar");
    text[i].innerHTML = text[i].innerHTML.replace(/SHARKS/g, "BLÅHAJAR");
    count += ((text[i].innerHTML.length - chars) / 2);
    chars = text[i].innerHTML.length;
    text[i].innerHTML = text[i].innerHTML.replace(/shark/g, "blåhaj");
    text[i].innerHTML = text[i].innerHTML.replace(/Shark/g, "Blåhaj");
    text[i].innerHTML = text[i].innerHTML.replace(/SHARK/g, "BLÅHAJ");
    count += (text[i].innerHTML.length - chars);   
}
function isVisible(element) {
    const style = getComputedStyle(element);
    if (style.display === 'none' || style.width <= 0 || style.height <= 0) {
        return false;
    } else {
        return true;
    }
}

console.log(count);
console.log("Sharks".length);
console.log("Blåhajar".length);