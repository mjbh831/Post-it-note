let enter = document.querySelector("#enter");
let input = document.querySelector(".userinput");
let ul = document.querySelector("ul");
let body = document.querySelector("body");
let counter = 0;

// Functions used to create imperfect "handwritten" list items 

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}
function randomRotate() {
    let stylesheets = document.styleSheets[2];
    stylesheets.insertRule('.rotate' + counter + '{rotate:' + getRandomNumber(-2,3) + 'deg}', stylesheets.cssRules.length);
}
function randomPadBot() {
    let stylesheets = document.styleSheets[2];
    stylesheets.insertRule('.padbot' + counter + '{padding-bottom:' + getRandomNumber(10,12) + 'px}', stylesheets.cssRules.length);
}
function randomMarginL() {
    let stylesheets = document.styleSheets[2];
    stylesheets.insertRule('.margleft' + counter + '{margin-left:'  + getRandomNumber(-2,2) + 'px}', stylesheets.cssRules.length);
}
function randomFontSize() {
    let stylesheets = document.styleSheets[2];
    stylesheets.insertRule('.fsize' + counter + '{font-size:' + '1.' + getRandomNumber(2,5) + 'rem}', stylesheets.cssRules.length);
}
function listStyle() {
    randomFontSize();
    randomRotate();
    randomPadBot();
    randomMarginL();
}

function makeListItem() {
    let createli = document.createElement("li");
    let createimg = document.createElement("img");
    createimg.src = '../img/strike.png';

    if( input.value.length < 8 ) {
        createimg.setAttribute("class", "strikesm");
        createimg.style.display = 'none';
        createli.onclick = function() { 
            toggleStrikeThrough();
         };
    } else if ( input.value.length >= 8 && input.value.length <= 12 ){
        createimg.setAttribute("class", "strikemd2");
        createimg.style.display = 'none';
        createli.onclick = function() { 
            toggleStrikeThrough();
         };
    } else if ( input.value.length > 12 && input.value.length < 19 ){
        createimg.setAttribute("class", "strikemd");
        createimg.style.display = 'none';
        createli.onclick = function() { 
            toggleStrikeThrough();
         };
    } else {
        createimg.setAttribute("class", "strikelg");
        createimg.style.display = 'none';
        createli.onclick = function() { 
            toggleStrikeThrough();
        };
    }

        function toggleStrikeThrough(){
            if(createimg.style.display !== "none"){
                createimg.style.display = "none";
            } else{
                createimg.style.display = "block";
            }
        }

    createli.appendChild(document.createTextNode("* " + input.value));
    createli.appendChild(createimg);
    createli.classList.add('task');
    createli.classList.add('rotate' +  counter);
    createli.classList.add('padbot' +  counter);
    createli.classList.add('margleft' +  counter);
    createli.classList.add('fsize' +  counter);
    listStyle();
    ul.appendChild(createli);
    counter++;
}

// Functions used to create imperfect "handwritten" list items ^^^^^^^


// Event listeners to add task to list

body.addEventListener("keypress", function(e) {
    if( e.keyCode === 13 && counter < 10 && addModal.style.display !== "flex") {
        addModal.style.display = "flex";
        input.focus();
    }
})

enter.addEventListener("click", function(){
    if (counter > 9){
        input.value = "";
        letstalk.style.display = "flex";
    } else if(input.value.length > 0){
       makeListItem(); 
       input.value = "";
       input.focus(); 
       addModal.style.display = "none";
       modal.style.display = "none";
    }  
})

input.addEventListener("keypress", function(e){
     if( counter > 8 ) {
        input.value = "";
        letstalk.style.display = "flex";
     } else if((input.value.length > 0) && e.keyCode === 13) {
        makeListItem(); 
        input.value = "";
        addModal.style.display = "none";
        modal.style.display = "none";
     }
})

// Event listeners to add task to list ^^^

// close modal function
function closeModal() {
    addModal.style.display = "none";
    modal.style.display = "none";
    letstalk.style.display = "none";
    input.value = "";
}



// Notepad menu buttons functionality

let addModal = document.querySelector("#adding");
let addExit = document.querySelector("#addexit");
let talkExit = document.querySelector("#talkexit");
let modal = document.querySelector(".modal")
let plus = document.querySelector("#plus");
let minus = document.querySelector("#minus");
let reset = document.querySelector("#reset");
let letstalk = document.querySelector("#letstalk")

    // ADD LI w/ modal functions
    
    plus.addEventListener("click", function(){
        if ( counter < 9) {
            addModal.style.display = "flex";
            input.focus();  
        } else {
            letstalk.style.display = "flex";
        }
        
    })
    addExit.addEventListener("click", function(){
        addModal.style.display = "none";
        modal.style.display = "none";
        input.value = "";
    })

    talkExit.addEventListener("click", function(){
        modal.style.display = "none";
        letstalk.style.display = "none";
    })

    // ADD LI w/ modal functions ^^^

    // DELETE last li

    minus.onclick = function(){
        let li = document.querySelectorAll("li");
        let lastLi = li[li.length - 1]
        lastLi.remove();
        counter--;
    }


    // DELETE last li ^^^

    // RESET NOTEPAD TO ZERO TASK
    
    reset.onclick = function(){
        ul.innerHTML = "";
        let createli = document.createElement("li");
        counter = 0;
    }

    // RESET NOTEPAD TO ZERO TASK ^^^

// Notepad menu buttons functionality ^^^

