let count = 0;
new Promise((resolve) => {
    chrome.storage.local.get(["on"], function (output) {
        x = output.on;
        if (x === undefined || x) {
            handleElement(document.querySelector('html'));
            console.log(count + "words replaced");
            add(count);
        }
    });
});
//a function to handle any html element
function handleElement(element) {
    //loops through all elements backward
    for (let i = element.childNodes.length; i-- > 0;) {
        let child = element.childNodes.item(i);
        //checks if it is the type of element that can contain other elements
        if (child.nodeType === 1) {
            let name = child.nodeName.toLowerCase();
            if (name != 'style' && name != 'script') {
                //recurses if it has other elements
                handleElement(child);
            } // checks if it is the type of element that contains text 
        } else if (child.nodeType === 3) {
            if (typeof(child) === "string") {
            } else {
                //fixes text
                child.textContent = fixText(child.textContent);
            }
        }
    }
}
function fixText(element) {
    let chars = element.length;
    //uses regex statements to replace all  
    element = element.replace(/Sharks/g, "Blåhajar");
    element = element.replace(/sharks/g, "blåhajar");
    element = element.replace(/SHARKS/g, "BLÅHAJAR");
    //checks the difference in text length to determine how many to add
    count += ((element.length - chars) / 2);
    chars = element.length;
    element = element.replace(/shark/g, "blåhaj");
    element = element.replace(/Shark/g, "Blåhaj");
    element = element.replace(/SHARK/g, "BLÅHAJ");
    count += (element.length - chars);
    return element;
} 

//adds a number (a) to the stored number
async function add(a) {
    if (await get() === undefined) {
        chrome.storage.local.set({"clicks" : a})
    } else {
        chrome.storage.local.set({"clicks" : a + await get()});
    }
}
//returns current value
async function get() {
    let y = 0;
    y = new Promise((resolve, reject) =>  {
        chrome.storage.local.get(["clicks"], function (output) {
            x = output.clicks;
            resolve(x);
        });
    });
    return y;

}


