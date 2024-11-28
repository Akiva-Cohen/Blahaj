console.log("working")
const text = document.querySelectorAll('h1, h2, h3, h4, h5, p, li, td, caption, span, a')

for (let i = 0; i < text.length; i++) {
    if (text[i].innerHTML.includes('shark')) {
        text[i].innerHTML = text[i].innerHTML.replace("shark", "blahaj");
    } else if (text[i].innerHTML.includes("Shark")) {
        text[i].innerHTML = text[i].innerHTML.replace("Shark", "Blahaj");
    }
}