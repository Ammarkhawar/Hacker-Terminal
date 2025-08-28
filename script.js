// function cookMeal(food, callback){
//     console.log(`Cooking ${food}...`);
//     setTimeout(() => {
//         console.log(`${food} is ready Braaaather!`);
//         callback();
//     }, 5000)
// }

// cookMeal('Biryani', () => {
//     cookMeal('Chicken Karahi', () => {
//         cookMeal('Nihari', () => {
//             cookMeal('Seekh Kabab', () => {
//                 console.log('All meals are ready!');
//                 // You can add more meals here if needed
//             })
//         })
//     })
// });


// let p1 = new Promise((resolve, reject) => {
//     let isClean = true; // Change this to false to simulate an error
//     if (isClean){
//         resolve("Room is clean Braaather ✅")
//     }
//     else{
//         reject("Room is not clean Braaather ❌")
//     }
// })

// p1
//   .then(result => console.log("result: ", result)) // when resolved
//   .catch(error => console.error("error: ", error)); // when rejected


// function cook(food) {
//   return new Promise((resolve) => {
//     setTimeout(() => resolve(`${food} is ready 🍴`), 1000);
//   });
// }

// cook("Rice")
//   .then(msg => {
//     console.log(msg);
//     return cook("Chicken");
//   })
//   .then(msg => {
//     console.log(msg);
//     return cook("Soup");
//   })
//   .then(msg => console.log(msg));



// async function getData(){
//     let x = await fetch('https://jsonplaceholder.typicode.com/todos/1')
//     console.log("x:", x)
//     let data = await x.json()
//     console.log("data:", data)
//     return data
// }

// async function main() {
//     console.log('Start');

//     let data = await getData();
//     console.log('Data received:', data);

// }

// main();

// let text = document.querySelector('.terminal h2');
// console.log("text:", text.textContent)

// async function StartBlinking(txt) {

//   text.textContent = txt;
//   let tempTxt = txt;

//   return new Promise((resolve) => {
//     if (txt === "Hacking Complete!") {
//       text.textContent = txt;
//       resolve(txt);
//       return;
//     }
//     else {
//       if (text.textContent.endsWith('...')) {
//         text.textContent = txt;
//         StartBlinking(txt);
//       }
//       else {
//         while(true){
//           setTimeout(() => {
//             tempTxt = txt + '.';
//             text.textContent = tempTxt
//           }, 500)
//         }
//       }
//     }
//   })
// }

// let alerts = [
//   "Initizalzing Hacking",
//   "Reading System Files",
//   "Password Files Detected",
//   "Sending all passwords and personal data to server",
//   "Cleaning up traces",
//   "Hacking Complete!"
// ];

// alerts.forEach(txt => {
//   setTimeout( () => {
//      StartBlinking(txt);
//   }, alerts.indexOf(txt) * Math.floor(Math.random() * 7) * 1000);

// });




let alerts = [
  "Initizalzing Hacking",
  "Reading System Files",
  "Password Files Detected",
  "Sending all passwords and personal data to server",
  "Cleaning up traces",
  "Hacking Complete!"
];

let text = document.querySelector('.terminal h2');

// STEP 1: start/stop-able blinker
function StartBlinking(txt) {
  if (txt === "Hacking Complete!") {
    text.textContent = txt;
    return null; // No blinking needed
  }
  else {
    text.textContent = txt;
    let dots = 0;
    const id = setInterval(() => {
      dots = (dots + 1) % 4; // Cycle through 0, 1, 2, 3
      text.textContent = txt + '.'.repeat(dots);
    }, 500)

    // Return a function to stop the blinking
    return function stop() {
      clearInterval(id);
    };
  }
}

// STEP 2: Creating a function to generate random seconds
function randSeconds(min = 1, max = 7) {
  return (Math.floor(Math.random() * (max - min + 1)) + min) * 1000;
}


let stop = null;
let totalDelay = 0;

// Step 3: Start the first alert immediately
stop = StartBlinking(alerts[0]);

// Step 4: schedule the rest, each after a random extra delay
for (let i = 1; i < alerts.length; i++) {
  const delay = randSeconds();
  totalDelay += delay;

  setTimeout(() => {
    if (stop) stop();               // stop previous blinking
    stop = StartBlinking(alerts[i]); // start new blinking
  }, totalDelay);
}





// async function StartBlinking(txt) {

//   text.textContent = txt;
//   let tempTxt = txt;

//   return new Promise((resolve) => {
//     if (txt === "Hacking Complete!") {
//       text.textContent = txt;
//       resolve(txt);
//       return;
//     }
//     else {
//       if (text.textContent.endsWith('...')) {
//         text.textContent = txt;
//         StartBlinking(txt);
//       }
//       else {
//         let dotCount = 0;
//         let intervalId = setInterval(() => {
//           if (dotCount < 3) {
//             dotCount++;
//             tempTxt = txt + '.'.repeat(dotCount);
//             text.textContent = tempTxt;
//           } else {
//             clearInterval(intervalId);
//             StartBlinking(txt);
//           }
//         }, 500);
//       }
//     }
//   })
// }