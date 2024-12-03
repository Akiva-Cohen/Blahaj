let y = 0;
y = new Promise((resolve) =>  {
    chrome.storage.local.get(["clicks"], function (output) {
        x = output.clicks;
        document.getElementById("clicks").innerText = x;
        resolve(x);
    });
});
let z = false;
z = new Promise((resolve) => {
    chrome.storage.local.get(["on"], function (output) {
        x = output.on;
        if (x === undefined) {
            document.getElementById("onOff").checked = true;
        } else {
            document.getElementById("onOff").checked = x;
            resolve(x);
        }
    });
});

const check = document.getElementById("onOff");
check.addEventListener("change", function () {
    if(check.checked) {
        chrome.storage.local.set({"on":true});
    } else {
        chrome.storage.local.set({"on" : false});
    }
});