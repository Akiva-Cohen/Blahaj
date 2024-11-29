console.log("working")
let count = 0;
handleElement(document.querySelectorAll('html').item(0));
function handleElement(element) {
    for (let i = element.childNodes.length; i-- > 0;) {
        let child = element.childNodes.item(i);
        if (child.nodeType === 1) {
            let name = child.nodeName.toLowerCase();
            if (name != 'style' && name != 'script') {
                handleElement(child);
            } 
        } else if (child.nodeType === 3) {
            if (typeof(child) === "string") {
            } else {
                child.textContent = fixText(child.textContent);
                console.log(child.textContent);
            }
        }
    }
}
function fixText(element) {
    let chars = element.length;
    element = element.replace(/Sharks/g, "Blåhajar");
    element = element.replace(/sharks/g, "blåhajar");
    element = element.replace(/SHARKS/g, "BLÅHAJAR");
    count += ((element.length - chars) / 2);
    chars = element.length;
    element = element.replace(/shark/g, "blåhaj");
    element = element.replace(/Shark/g, "Blåhaj");
    element = element.replace(/SHARK/g, "BLÅHAJ");
    count += (element.length - chars);  
    return element;
} 
console.log(count);
console.log("Sharks".length);
console.log("Blåhajar".length);