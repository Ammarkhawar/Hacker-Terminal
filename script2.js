let alert = [
    "Initizalzing Hacking",
    "Reading System Files",
    "Password Files Detected",
    "Sending all passwords and personal data to server",
    "Cleaning up traces",
    "Hacking Complete!"
]

let text = document.querySelector('.terminal h2');

function StartBlinking(txt) {
    if (txt === "Hacking Complete!") {
        text.textContent = txt;
        return null; // No blinking needed
    }
    else {
        text.textContent = txt;
        let dots = 0;
        let id = setInterval(() => {
            dots = (dots + 1) % 4; // Cycle through 0, 1, 2, 3
            text.textContent = txt + '.'.repeat(dots);
        }, 500);

        return function stop() {
            clearInterval(id);
        }
    }
}

async function sleep(milliseconds) {
    return new Promise((resolve) => setTimeout(resolve, milliseconds));    
}

function randSeconds(min = 1, max = 7) {
    return (Math.floor(Math.random() * (max - min + 1)) + min) * 1000;
}

let stop = null;
let totalDelay = 0;

async function runAlerts() {

    for (const txt of alert) {
        if (stop) stop();
        stop = StartBlinking(txt);
        console.log("txt: ", txt);
        await sleep(randSeconds());

    }
}

runAlerts();