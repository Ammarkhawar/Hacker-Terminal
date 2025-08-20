let inputForm = document.getElementById("input-form")
console.log("inputForm = ", inputForm)

function getValues() {

    // get values
    let cTitle = document.getElementById("cTitle").value;
    let Cname = document.getElementById("Cname").value;
    let videoViews = document.getElementById("videoViews").value
    let monthsOld = document.getElementById("monthsOld").value
    let duration = document.getElementById("duration").value
    let fileInput = document.getElementById("thumbnail")
    let file = fileInput.files[0]; // get the selected file

    console.log("cTitle = ", cTitle)
    console.log("Cname = ", Cname)
    console.log('videoViews = ', videoViews)
    console.log('monthsOld = ', monthsOld)
    console.log('duration = ', duration)
    console.log('fileInput =', fileInput)
    console.log('file = ', file)

    createCard(cTitle, Cname, videoViews, monthsOld, duration, file);
}

function createCard(cTitle, Cname, videoViews, monthsOld, duration, file) {

      // create a temporary URL for the file
    let imageUrl = URL.createObjectURL(file);
    console.log('imageUrl = ', imageUrl)

    // Increment the Card Number
    let videoCountElement = document.getElementsByClassName("videoCount")
    let numbers = [];
    for (let i = 0; i < videoCountElement.length; i++) {
        numbers.push(videoCountElement[i].innerHTML)
    }
    console.log("numbers = ", numbers)

    let maxNum = Math.max(...numbers)
    console.log("maxNum =", maxNum)

    let videoCount = ++maxNum;
    console.log('videoCount =', videoCount)

    // 1. Select the parent div
    let cards = document.getElementById("cards")
    console.log("cards =", cards)

    // 2. Create a new div
    let newCard = document.createElement("div")
    console.log("newCard =", newCard)

    // 3. Add a class name
    newCard.classList.add("card");

    // 4. Add some content
    newCard.innerHTML = `<!-- Video Number -->
        <p class="videoCount" id="videoCount">${videoCount}</p>

        <!-- Video Thumbnail & Video Duration -->
        <div class="card-thumbnail">
          <div class="video-duration">
            <p>${duration}</p>
          </div>
        </div>

        <!-- Video Details -->
        <div class="card-details">

          <!-- Card Title -->
          <h3 class="card-title">${cTitle}</h3>

          <!-- Other Details -->
          <div class="small-details">
            <p class="channel-name">${Cname}</p>
            <div class="seperator">•</div>
            <p class="video-views">${videoViews} views</p>
            <div class="seperator">•</div>
            <p class="months-old">${monthsOld} months ago</p>
          </div>

        </div>

        <!-- Vertical Ecllipse Icon -->
         <i class="fa-solid fa-ellipsis-vertical"></i>
    `
     // set dynamic background image for this card
  newCard.querySelector(".card-thumbnail").style.backgroundImage = `url('${imageUrl}')`;

    // 5. Append Child to Cards Div
    cards.appendChild(newCard);
}